import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { data } from 'src/data/mockdata';
import { ReusableTableComponent } from 'src/app/views/components/reusable-table/reusable-table.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgFor, ReusableTableComponent],
})
export class TableComponent {
  public cardData = data.Operators;

  public cardValue: any;

  ngOnInit() {
    this.cardValue = Object.values(this.cardData);
  }

  onClick(id: number) {
    console.log('Clicked');
    console.log(id);
  }
}
