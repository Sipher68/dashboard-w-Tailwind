import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/data/mockdata';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { WritePostComponent } from '../write-post/write-post.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ProfileCardComponent,
    WritePostComponent,
    PageHeaderComponent,
  ],
})
export class ReusableTableComponent {
  @Input() tableName!: string;
  public table: any;

  public routeID: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.routeID = id;
    });

    // Configure table data based on Operator ID
    if (this.routeID) {
      let operatorName = data.Operators[this.routeID].Operator_Name;
      this.tableName = operatorName;
      this.table = Object.values(
        data.PAO.filter((x) => x.Operator_ID == this.routeID)
      );
    }

    switch (this.tableName) {
      case 'PAO':
        this.table = Object.values(data.PAO);
        break;
      case 'Drivers':
        this.table = Object.values(data.Drivers);
        break;
      default:
        // Handle the case where tableType is not 'PAO' or 'Drivers'
        break;
    }
  }
}
