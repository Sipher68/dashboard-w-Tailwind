import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss'],
  standalone: true,
  imports: [NgIf, FontAwesomeModule],
})
export class WritePostComponent {
  @Input() department!: string;

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  faPenToSquare = faPenToSquare;
}
