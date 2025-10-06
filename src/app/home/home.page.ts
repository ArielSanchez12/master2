import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class HomePage {
  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/details']);
  }
  goToInfo() {
    this.router.navigate(['/info']);
  }
}
