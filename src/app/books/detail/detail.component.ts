import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book;

  constructor(private route : ActivatedRoute, private booksService : BooksService) { 
    this.route.params.subscribe(params => {
      this.booksService.getBook(params['id']).subscribe(
        (data) => {
          this.book = data;
        }
      );
    });
  }

  ngOnInit(): void {
  }

}
