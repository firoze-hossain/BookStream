package com.roze.repository;

import com.roze.entity.BookTransactionHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookTransactionHistoryRepository extends JpaRepository<BookTransactionHistory, Integer> {
    @Query("select history from BookTransactionHistory  history where history.user.id=:userId")
    Page<BookTransactionHistory> findAllBorrowedBooks(Pageable pageable, Integer userId);

    @Query("select history from BookTransactionHistory  history where history.book.user.id=:userId")
    Page<BookTransactionHistory> findAllReturnedBooks(Pageable pageable, Integer userId);

    @Query("select (count(*) > 0) as isBorrowed from BookTransactionHistory bookTransactionHistory" +
            " where bookTransactionHistory.user.id=:userId and bookTransactionHistory.book.id=:bookId" +
            " and bookTransactionHistory.returnedApproved=false ")
    boolean isAlreadyBorrowedByUser(Integer bookId, Integer userId);

    @Query("select transaction from BookTransactionHistory transaction where " +
            "transaction.user.id=:userId and" +
            " transaction.book.id=:bookId and" +
            " transaction.returned=false and" +
            " transaction.returnedApproved=false")
    Optional<BookTransactionHistory> findByBookIdAndUserId(Integer bookId, Integer userId);
}
