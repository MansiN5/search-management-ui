import { Component, ViewChild, ElementRef } from '@angular/core';
import { NameListService } from './name-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('searchInput') searchInputRef!: ElementRef; 
  searchQuery: string = '';
  users: any[] = [];
  errorMessage: string = '';
  invalidInput: boolean = false;

  constructor(private nameListService: NameListService) {
  }
  ngAfterViewInit() {
    // Focus on the input element when the component initializes
    this.searchInputRef.nativeElement.focus();
  }

  search() {
    if (this.searchQuery) {
      if (this.isValidInput(this.searchQuery)) {
      this.nameListService.getAllNames(this.searchQuery.trim()).subscribe(
        (data) => {
          this.users = data;
          this.errorMessage = '';
        },
        (error) => {
          if (error.status === 404) {
            this.errorMessage = 'Resource not found';
          } else if (error.status === 403) {
            this.errorMessage = 'Forbidden';
          } else if (error.status === 500) {
            this.errorMessage = 'Internal Server Error';
          } else {
            this.errorMessage = 'An error occurred';
          }
          this.users = [];
          this.invalidInput = false;
        }
      );
      }
      else{
        this.users = [];
        this.errorMessage = '';
        this.invalidInput = true; 
        this.errorMessage = 'Please provide valid input. Allowed characters [A-Z, a-z, 0-9, @, -, _]';
      }
    } 
    else {
      this.users = [];
      this.errorMessage = 'Please provide a search input.';
    }
  }

  private isValidInput(input: string): boolean {
    // Use a regular expression to validate input
    const regex = /^[a-zA-Z0-9@\-_ ]+$/;
    return regex.test(input);
  }

  validateInput() {
    // Reset the invalidInput flag when the user modifies the input
    this.invalidInput = false;
  }
}
