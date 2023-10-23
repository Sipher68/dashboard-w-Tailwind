import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  standalone: true,
  imports: [PageHeaderComponent],
})
export class ProfileCardComponent {}
