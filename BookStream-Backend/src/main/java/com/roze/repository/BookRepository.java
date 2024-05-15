package com.roze.repository;

import com.roze.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
    @Query("select book from Book  book where book.archived=false and book.shareable=true and book.user.id != :userId")
    Page<Book> findAllDisplayableBooks(Pageable pageable, Integer userId);
}
