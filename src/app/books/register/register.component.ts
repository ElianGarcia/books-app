import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  book : Book = new Book();
  bookForm : FormGroup;
  currentYear : number = new Date().getFullYear();

  constructor(private route : ActivatedRoute, private booksService : BooksService,
    private router : Router, private dialog : DialogService,
    private fb : FormBuilder) { 
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.booksService.getBook(params['id']).subscribe(book => {
          this.book = book;
          this.bookForm.patchValue(book);
        });
      }
    });
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      bookId: [0],
      title: ['', [Validators.required]],
      isbn: ['', [Validators.required, Validators.minLength(11)]],
      author: ['', [Validators.required]],
      category: ['', [Validators.required]],
      yearOfPublication: ['', [Validators.required, Validators.min(1900), Validators.max(this.currentYear)]],
      quantity: ['', [Validators.required]],
      dateAdded: [new Date(), [Validators.required]]
    });
  }

  public getError(controlName: string): string {
    if (this.bookForm.get(controlName) != null) {
      if (this.bookForm.get(controlName)?.hasError('required')) {
        return `El campo ${controlName} es obligatorio.`;
      } else if (this.bookForm.get(controlName)?.hasError('email')) {
        return `El campo ${controlName} debe ser un email válido.`;
      } else if (this.bookForm.get(controlName)?.hasError('minlength')) {
        return `El campo ${controlName} debe tener como mínimo 11 caracteres.`;
      } else if (this.bookForm.get(controlName)?.hasError('maxlength')) {
        return `El campo ${controlName} debe tener como máximo 13 caracteres.`;
      } else if (this.bookForm.get(controlName)?.hasError('min')) {
        return `El campo ${controlName} debe tener como mínimo 1900.`;
      } else if (this.bookForm.get(controlName)?.hasError('max')) {
        return `El campo ${controlName} debe tener como máximo ${this.currentYear}.`;
      }

    }
    return '';
  }

  save() {
    if(!this.bookForm.valid)
    {
      this.dialog.showMessage('Please fill all the required fields.');
      this.bookForm.markAllAsTouched();
      return;
    }

    if(this.book.bookId > 0) {
      this.booksService.updateBook(this.bookForm.value).subscribe({
        next: book => {
          this.dialog.showMessage('Book updated successfully.');
          this.router.navigate(['']);
        },
        error: err => {
          this.dialog.showMessage('Error updating book.');
        }
      });
    } else {
      this.booksService.addBook(this.bookForm.value).subscribe({
        next: book => {
          this.dialog.showMessage('Book added successfully.');
          this.router.navigate(['']);
        },
        error: err => {
          this.dialog.showMessage('Error adding book.');
          console.log(err);
        }
      });
    }
  }
}
