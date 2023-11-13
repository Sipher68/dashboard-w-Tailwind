import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
import { WritePostComponent } from 'src/app/views/components/write-post/write-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPaperclip,
  faImage,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [NgIf, WritePostComponent, FontAwesomeModule],
})
export class PostsComponent {
  constructor(private sharedService: SharedService) {}

  // Show write post modal
  showWritePostModal = false;

  // get Message Location
  messageLocation!: string;
  ngOnInit() {
    // Set Message Location based on Filter value
    this.sharedService.selectedFilter$.subscribe((filter) => {
      this.messageLocation = filter;
    });
  }

  openWritePostModal() {
    this.showWritePostModal = !this.showWritePostModal;
  }

  // FA Icons
  faPaperclip = faPaperclip;
  faImage = faImage;
  faFaceSmile = faFaceSmile;
}
