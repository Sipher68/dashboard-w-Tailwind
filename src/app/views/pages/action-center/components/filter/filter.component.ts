import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class FilterComponent {
  showFilter: boolean = false;
  filterValues: any = ['Memo', 'Violation', 'Payment Dues'];
  selectedFilter!: string;

  constructor(private sharedService: SharedService) {}

  onClickFilter() {
    this.sharedService.emptyFilter();
    this.showFilter = !this.showFilter;
  }

  onSelectFilterValue(value: string) {
    // set selectedFilter as value from filtervalue
    this.selectedFilter = value.toUpperCase();
    // Send selectedFilter to sharedService
    this.sharedService.changeSelectedFilter(this.selectedFilter);
    console.log(this.selectedFilter);
    // Close Filter
    this.showFilter = false;
  }
}
