import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-phone-number',
  templateUrl: './change-phone-number.component.html',
  styleUrls: ['./change-phone-number.component.scss'],
  standalone: true,
  imports: [NgIf, FontAwesomeModule],
})
export class ChangePhoneNumberComponent {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  faPenToSquare = faPenToSquare;
}
