import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { data } from 'src/data/mockdata';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  standalone: true,
  imports: [NgIf, PageHeaderComponent],
})
export class ProfileCardComponent {
  constructor(private sharedService: SharedService) {}

  profile_type: any;
  profile_data: any;

  ngOnInit() {
    this.getProfile_Data();
  }

  getProfile_Data() {
    // Clears profile_data array so that only one object is stored
    this.profile_data = [];
    let queryData = this.sharedService.getQueryData();
    console.log('Query Data: ', queryData);

    if (queryData.type == 'pao') {
      this.profile_type = 'PAO Profile';

      // Store data in profile_data using the ID from the query
      this.profile_data = data.PAO.find((x) => x.ID == queryData.id);
    } else if (queryData.type == 'driver') {
      this.profile_type = 'Driver Profile';

      // Store data in profile_data using the ID from the query
      this.profile_data = data.Drivers.find((x) => x.ID == queryData.id);
    }
    console.log('Profile type: ', this.profile_type);
    console.log('Profile data: ', this.profile_data);
  }
}
