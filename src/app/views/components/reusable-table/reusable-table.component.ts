import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { data } from 'src/data/mockdata';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class ReusableTableComponent {
  @Input() tableType!: string;

  public table: any;

  ngOnInit() {
    if (this.tableType == 'PAO') {
      this.table = Object.values(data.PAO);
    } else if (this.tableType == 'Drivers') {
      this.table = Object.values(data.Drivers);
    }
  }
}
