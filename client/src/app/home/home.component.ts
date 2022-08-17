import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeDisplayMode = false;
  categoriesDisplay = false;
  authorsDisplay = false;
  booksDisplay = false;

  constructor() { }

  ngOnInit(): void {
  }

  changingMode() {
    this.homeDisplayMode = !this.homeDisplayMode;
  }

  goBack() {
    this.changingMode();
  }
  
  getBooks() {
    this.booksDisplay = !this.booksDisplay;
  }

  getAuthors() {
    this.authorsDisplay = !this.authorsDisplay;
  }

  getCategories() {
    this.categoriesDisplay = !this.categoriesDisplay;
  }
}
