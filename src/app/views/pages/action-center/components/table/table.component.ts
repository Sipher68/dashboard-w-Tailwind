import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { data } from 'src/data/mockdata';
import { SharedService } from 'src/app/services/shared.service';
import { FilterComponent } from '../filter/filter.component';
import { PostsComponent } from '../../posts/posts.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, FilterComponent, PostsComponent],
})
export class TableComponent {
  public cardData = data.Bulletin;

  public cardValue: any;

  selectedFilter!: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.emptyFilter();
    this.sharedService.selectedFilter$.subscribe((filter) => {
      this.selectedFilter = filter;
      if (!this.selectedFilter) {
        this.cardValue = Object.values(this.cardData);
      } else {
        this.cardValue = this.cardData.filter((card) => {
          return card.Message_Location === this.selectedFilter;
        });
      }
    });
  }
}
