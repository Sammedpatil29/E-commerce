import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  selectedLanguage: string = 'en';
  languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'ka', label: 'Kannada' },
  ];

  showbox: boolean= true;

  close() {
    this.showbox = false;
    console.log('I am clicked')
  }
  constructor() { }

}
