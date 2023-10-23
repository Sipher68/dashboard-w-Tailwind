import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss'],
  standalone: true,
  imports: [NgIf, FontAwesomeModule],
})
export class ChangeEmailComponent {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  faPenToSquare = faPenToSquare;
}
