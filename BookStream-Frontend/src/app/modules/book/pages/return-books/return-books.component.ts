import {Component, OnInit} from '@angular/core';
import {PageResponseBorrowedBookResponse} from "../../../../services/models/page-response-borrowed-book-response";
import {BookService} from "../../../../services/services/book.service";
import {BorrowedBookResponse} from "../../../../services/models/borrowed-book-response";

@Component({
  selector: 'app-return-books',
  templateUrl: './return-books.component.html',
  styleUrls: ['./return-books.component.scss']
})
export class ReturnBooksComponent implements OnInit {
  page = 0;
  size = 5;
  returnedBooks: PageResponseBorrowedBookResponse = {};
  message: string = '';
  level: string = 'Success';

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.findAllReturnedBooks();
  }

  private findAllReturnedBooks() {
    this.bookService.findAllReturnedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (res) => {
        this.returnedBooks = res;
      }
    });
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllReturnedBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllReturnedBooks();
  }

  goToPage(page: number) {
    this.page = page;
    this.findAllReturnedBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllReturnedBooks();
  }

  goToLastPage() {
    this.page = this.returnedBooks.totalPages as number - 1;
    this.findAllReturnedBooks();
  }

  get isLastPage(): boolean {
    return this.page == this.returnedBooks.totalPages as number - 1;

  }

  approveBookReturn(book: BorrowedBookResponse) {
    if (!book.returned) {
      this.level = 'Error';
      this.message = "Book is not yet returned";
      return;
    }
    this.bookService.approveReturnBorrowBook({
      'bookId': book.id as number
    }).subscribe({
      next: () => {
        this.level = 'Success';
        this.message = "Book Return Approved";
        this.findAllReturnedBooks();
      }
    })
  }
}
