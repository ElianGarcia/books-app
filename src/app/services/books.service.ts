import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Endpoints } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient : HttpClient) { }

  getBooks() : Observable<Book[]> {
    return this.httpClient.get<Book[]>(Endpoints.GET_BOOKS);
  }

  getBook(id : number) : Observable<Book> {
    return this.httpClient.get<Book>(Endpoints.GET_BOOK_BY_ID + id);
  }

  addBook(book : Book) : Observable<Book> {
    return this.httpClient.post<Book>(Endpoints.REGISTER_BOOKS, book);
  }

  updateBook(book : Book) : Observable<Book> {
    return this.httpClient.put<Book>(Endpoints.UPDATE_BOOKS + book.bookId, book);
  }

  deleteBook(id : number) : Observable<Book> {
    return this.httpClient.delete<Book>(Endpoints.DELETE_BOOKS + id);
  }

}
