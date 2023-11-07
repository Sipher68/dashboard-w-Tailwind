import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { data } from 'src/data/mockdata';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { WritePostComponent } from '../write-post/write-post.component';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss'],
  standalone: true,
  imports: [NgFor, ProfileCardComponent, WritePostComponent],
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
