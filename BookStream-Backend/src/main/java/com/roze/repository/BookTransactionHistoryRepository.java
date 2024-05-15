package com.roze.repository;

import com.roze.entity.BookTransactionHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookTransactionHistoryRepository extends JpaRepository<BookTransactionHistory, Integer> {
    @Query("select history from BookTransactionHistory  history where history.user.id=:userId")
    Page<BookTransactionHistory> findAllBorrowedBooks(Pageable pageable, Integer userId);
}
