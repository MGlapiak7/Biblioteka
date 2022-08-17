import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  books: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.http.get('https://localhost:5001/api/books').subscribe({
      next: response => this.books = response,
      error: error => console.log(error)
    });
  }
}
