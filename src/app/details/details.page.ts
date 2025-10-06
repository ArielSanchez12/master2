import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class DetailsPage {
  constructor(private router: Router) {}
  goBackHome() {
    this.router.navigate(['/home']);
  }
  goToInfo() {
    this.router.navigate(['/info']);
  }
}