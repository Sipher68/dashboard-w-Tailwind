import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  standalone: true,
  imports: [NgIf, FontAwesomeModule],
})
export class ChangePasswordComponent {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  faPenToSquare = faPenToSquare;
}
