import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.css']
})
export class AuthorsPageComponent implements OnInit {
  authors: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(){
    this.http.get('https://localhost:5001/api/authors').subscribe({
      next: response => this.authors = response,
      error: error => console.log(error)   
    });
  }
}
