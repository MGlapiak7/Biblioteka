import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  categories: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.http.get('https://localhost:5001/api/categories').subscribe({
      next: response => this.categories = response,
      error: error => console.log(error)
    });
  }
}
