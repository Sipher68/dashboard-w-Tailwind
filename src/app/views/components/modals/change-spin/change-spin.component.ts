import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-spin',
  templateUrl: './change-spin.component.html',
  styleUrls: ['./change-spin.component.scss'],
  standalone: true,
  imports: [NgIf, FontAwesomeModule],
})
export class ChangeSpinComponent {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  faPenToSquare = faPenToSquare;
}
