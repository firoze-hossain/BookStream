import {Component, OnInit} from '@angular/core';
import {BorrowedBookResponse} from "../../../../services/models/borrowed-book-response";
import {PageResponseBorrowedBookResponse} from "../../../../services/models/page-response-borrowed-book-response";
import {BookService} from "../../../../services/services/book.service";
import {findAllBorrowedBooks} from "../../../../services/fn/book/find-all-borrowed-books";

@Component({
  selector: 'app-borrowed-book-list',
  templateUrl: './borrowed-book-list.component.html',
  styleUrls: ['./borrowed-book-list.component.scss']
})
export class BorrowedBookListComponent implements OnInit {
  page = 0;
  size = 5;
  borrowedBooks: PageResponseBorrowedBookResponse = {};

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.findAllBorrowedBooks();
  }

  returnBorrowedBook(book: BorrowedBookResponse) {

  }


  private findAllBorrowedBooks() {
    this.bookService.findAllBorrowedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (res) => {
        this.borrowedBooks = res;
      }
    });
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBorrowedBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllBorrowedBooks();
  }

  goToPage(page: number) {
    this.page = page;
    this.findAllBorrowedBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBorrowedBooks();
  }

  goToLastPage() {
    this.page = this.borrowedBooks.totalPages as number - 1;
    this.findAllBorrowedBooks();
  }

  get isLastPage(): boolean {
    return this.page == this.borrowedBooks.totalPages as number - 1;

  }

}
