import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { data } from 'src/data/mockdata';
import { SharedService } from 'src/app/services/shared.service';
import { FilterComponent } from '../filter/filter.component';
import { PostsComponent } from '../../posts/posts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, FilterComponent, PostsComponent, FontAwesomeModule],
})
export class TableComponent {
  public cardData = data.Bulletin;

  public cardValue: any;

  selectedFilter!: string;

  constructor(private sharedService: SharedService) {}

  // If pin icon is clicked
  isClicked: boolean[] = [];

  ngOnInit() {
    // Empty the filter on initialization
    this.sharedService.emptyFilter();

    // Subscribe to the selected filter
    this.sharedService.selectedFilter$.subscribe((filter) => {
      this.selectedFilter = filter;

      // If no filter is selected, set cardValue to all cardData
      // If a filter is selected, set cardValue to the filtered cardData
      this.cardValue = !this.selectedFilter
        ? Object.values(this.cardData)
        : this.cardData.filter(
            (card) => card.Message_Location === this.selectedFilter
          );
    });
  }

  toggleClick(index: number) {
    this.isClicked[index] = !this.isClicked[index];
  }
  faThumbTack = faThumbTack;
}
