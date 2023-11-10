import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/data/mockdata';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  standalone: true,
  imports: [PageHeaderComponent],
})
export class ProfileCardComponent {
  // Check if PAO or Driver
  // Get operator ID from route
  // Get PAO ID or Driver id from route
}
