import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class InfoPage {

  constructor(private router: Router) {}
  goToDetails() {
    this.router.navigate(['/details']);
  }
  goBackHome() {
    this.router.navigate(['/home']);
  }
  
}
