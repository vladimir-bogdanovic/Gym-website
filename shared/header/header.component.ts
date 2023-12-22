import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHamMenuOpen = false;

  openMenu() {
    this.isHamMenuOpen = !this.isHamMenuOpen;
    console.log('hamburger meni je:', this.isHamMenuOpen.valueOf());
  }
}
