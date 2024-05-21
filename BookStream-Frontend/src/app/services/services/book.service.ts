/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approveReturnBorrowBook } from '../fn/book/approve-return-borrow-book';
import { ApproveReturnBorrowBook$Params } from '../fn/book/approve-return-borrow-book';
import { BookResponse } from '../models/book-response';
import { borrowBook } from '../fn/book/borrow-book';
import { BorrowBook$Params } from '../fn/book/borrow-book';
import { findAllBooks } from '../fn/book/find-all-books';
import { FindAllBooks$Params } from '../fn/book/find-all-books';
import { findAllBooksByUser } from '../fn/book/find-all-books-by-user';
import { FindAllBooksByUser$Params } from '../fn/book/find-all-books-by-user';
import { findAllBorrowedBooks } from '../fn/book/find-all-borrowed-books';
import { FindAllBorrowedBooks$Params } from '../fn/book/find-all-borrowed-books';
import { findAllReturnedBooks } from '../fn/book/find-all-returned-books';
import { FindAllReturnedBooks$Params } from '../fn/book/find-all-returned-books';
import { findBookById } from '../fn/book/find-book-by-id';
import { FindBookById$Params } from '../fn/book/find-book-by-id';
import { PageResponseBookResponse } from '../models/page-response-book-response';
import { PageResponseBorrowedBookResponse } from '../models/page-response-borrowed-book-response';
import { returnBorrowBook } from '../fn/book/return-borrow-book';
import { ReturnBorrowBook$Params } from '../fn/book/return-borrow-book';
import { saveBook } from '../fn/book/save-book';
import { SaveBook$Params } from '../fn/book/save-book';
import { updateArchivedStatus } from '../fn/book/update-archived-status';
import { UpdateArchivedStatus$Params } from '../fn/book/update-archived-status';
import { updateShareableStatus } from '../fn/book/update-shareable-status';
import { UpdateShareableStatus$Params } from '../fn/book/update-shareable-status';
import { uploadBookCover } from '../fn/book/upload-book-cover';
import { UploadBookCover$Params } from '../fn/book/upload-book-cover';

@Injectable({ providedIn: 'root' })
export class BookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAllBooks()` */
  static readonly FindAllBooksPath = '/book';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBooks$Response(params?: FindAllBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
    return findAllBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBooks(params?: FindAllBooks$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
    return this.findAllBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
    );
  }

  /** Path part for operation `saveBook()` */
  static readonly SaveBookPath = '/book';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBook$Response(params: SaveBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveBook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBook(params: SaveBook$Params, context?: HttpContext): Observable<number> {
    return this.saveBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadBookCover()` */
  static readonly UploadBookCoverPath = '/book/cover/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadBookCover()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadBookCover$Response(params: UploadBookCover$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadBookCover(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadBookCover$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadBookCover(params: UploadBookCover$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadBookCover$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `borrowBook()` */
  static readonly BorrowBookPath = '/book/borrow/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrowBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowBook$Response(params: BorrowBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return borrowBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `borrowBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowBook(params: BorrowBook$Params, context?: HttpContext): Observable<number> {
    return this.borrowBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateShareableStatus()` */
  static readonly UpdateShareableStatusPath = '/book/shareable/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateShareableStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatus$Response(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateShareableStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateShareableStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatus(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateShareableStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `returnBorrowBook()` */
  static readonly ReturnBorrowBookPath = '/book/borrow/return/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `returnBorrowBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowBook$Response(params: ReturnBorrowBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return returnBorrowBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `returnBorrowBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowBook(params: ReturnBorrowBook$Params, context?: HttpContext): Observable<number> {
    return this.returnBorrowBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `approveReturnBorrowBook()` */
  static readonly ApproveReturnBorrowBookPath = '/book/borrow/return/approve/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveReturnBorrowBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnBorrowBook$Response(params: ApproveReturnBorrowBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return approveReturnBorrowBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approveReturnBorrowBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnBorrowBook(params: ApproveReturnBorrowBook$Params, context?: HttpContext): Observable<number> {
    return this.approveReturnBorrowBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateArchivedStatus()` */
  static readonly UpdateArchivedStatusPath = '/book/archived/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArchivedStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatus$Response(params: UpdateArchivedStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateArchivedStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArchivedStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatus(params: UpdateArchivedStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateArchivedStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findBookById()` */
  static readonly FindBookByIdPath = '/book/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBookById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById$Response(params: FindBookById$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findBookById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBookById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById(params: FindBookById$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findBookById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `findAllBooksByUser()` */
  static readonly FindAllBooksByUserPath = '/book/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBooksByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBooksByUser$Response(params?: FindAllBooksByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
    return findAllBooksByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBooksByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBooksByUser(params?: FindAllBooksByUser$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
    return this.findAllBooksByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
    );
  }

  /** Path part for operation `findAllReturnedBooks()` */
  static readonly FindAllReturnedBooksPath = '/book/returned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllReturnedBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedBooks$Response(params?: FindAllReturnedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
    return findAllReturnedBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllReturnedBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedBooks(params?: FindAllReturnedBooks$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
    return this.findAllReturnedBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
    );
  }

  /** Path part for operation `findAllBorrowedBooks()` */
  static readonly FindAllBorrowedBooksPath = '/book/borrowed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBorrowedBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBorrowedBooks$Response(params?: FindAllBorrowedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
    return findAllBorrowedBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBorrowedBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBorrowedBooks(params?: FindAllBorrowedBooks$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
    return this.findAllBorrowedBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
    );
  }

}
