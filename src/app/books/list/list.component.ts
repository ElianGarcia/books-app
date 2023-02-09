import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  searchKey: number;
  dataSource: MatTableDataSource<Book>;
  displayedColumns = [
    'id',
    'title',
    'isbn',
    'author',
    'category',
    'dateOfPublication',
    'quantity',
    'edit',
    'see',
    'delete'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private booksService: BooksService, private dialog: DialogService,
    private router : Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getBooks().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.books = data;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  search(){
    this.router.navigate(['/home/details/', this.searchKey]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteBook(id: number) {
    this.dialog.showConfirmMessage('Are you sure you want to delete this book?').subscribe({
      next: (res) => {
        if (res) {
          this.booksService.deleteBook(id).subscribe(
            (data) => {
              this.loadBooks();
            }
          );
        }
      }
    });

  }
}
