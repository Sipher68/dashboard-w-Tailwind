import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { ChangePhoneNumberComponent } from '../../components/modals/change-phone-number/change-phone-number.component';
import { ChangePasswordComponent } from '../../components/modals/change-password/change-password.component';
import { ChangeEmailComponent } from '../../components/modals/change-email/change-email.component';
import { ChangeSpinComponent } from '../../components/modals/change-spin/change-spin.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  standalone: true,
  imports: [
    PageHeaderComponent,
    ChangePhoneNumberComponent,
    ChangePasswordComponent,
    ChangeEmailComponent,
    ChangeSpinComponent,
  ],
})
export class MyProfileComponent {}
