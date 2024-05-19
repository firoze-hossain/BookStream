package com.roze.mapper;

import com.roze.dto.FeedbackRequest;
import com.roze.entity.Book;
import com.roze.entity.Feedback;
import org.springframework.stereotype.Service;

@Service
public class FeedbackMapper {
    public Feedback toFeedback(FeedbackRequest feedbackRequest) {
        return Feedback.builder()
                .note(feedbackRequest.note())
                .comment(feedbackRequest.comment())
                .book(Book.builder()
                        .id(feedbackRequest.bookId())
                        .archived(false)
                        .shareable(false)
                        .build())

                .build();
    }
}
