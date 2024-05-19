package com.roze.service;

import com.roze.dto.FeedbackRequest;
import com.roze.entity.Book;
import com.roze.entity.Feedback;
import com.roze.entity.User;
import com.roze.exception.OperationNotPermittedException;
import com.roze.mapper.FeedbackMapper;
import com.roze.repository.BookRepository;
import com.roze.repository.FeedbackRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final BookRepository bookRepository;
    private final FeedbackMapper feedbackMapper;
    private final FeedbackRepository feedbackRepository;

    public Integer save(FeedbackRequest feedbackRequest, Authentication connectedUser) {
        Book book = bookRepository.findById(feedbackRequest.bookId())
                .orElseThrow(() -> new EntityNotFoundException("No book found with this id: " + feedbackRequest.bookId()));

        if (book.isArchived() || !book.isShareable()) {
            throw new OperationNotPermittedException("You can not give feedback for archived or not shareable book");
        }
        User user = (User) connectedUser.getPrincipal();
        if (Objects.equals(book.getUser().getId(), user.getId())) {
            throw new OperationNotPermittedException("You can not give a feedback to your own book");
        }
        Feedback feedback = feedbackMapper.toFeedback(feedbackRequest);
        return feedbackRepository.save(feedback).getId();
    }
}
