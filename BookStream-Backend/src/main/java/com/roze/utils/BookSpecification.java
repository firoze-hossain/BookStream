package com.roze.utils;

import com.roze.entity.Book;
import org.springframework.data.jpa.domain.Specification;

public class BookSpecification {
    public static Specification<Book> withUserId(Integer userId) {
        return ((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("user").get("id"), userId));
    }
}
