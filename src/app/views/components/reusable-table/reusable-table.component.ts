import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { data } from 'src/data/mockdata';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { WritePostComponent } from '../write-post/write-post.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { SharedService } from 'src/app/services/shared.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.routeID = id;
    });

    // Configure table data based on Operator ID
    if (this.routeID) {
      let operatorName = data.Operators[this.routeID - 1].Operator_Name;
      this.tableName = operatorName;
      this.table = Object.values(
        data.PAO.filter((x) => x.Operator_ID == this.routeID - 1)
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

  onClick(id: number, id_type: string) {
    // Identify if PAO or Driver using id_type parameter and redirect to appropriate route
    id_type = id_type.toLowerCase();
    // Clears query data before setting new data
    this.sharedService.clearQueryData();
    // Set query data
    this.sharedService.setQueryData({ id: id, type: id_type });
    this.router.navigate([`/${id_type}/${id}`]);
  }
}
