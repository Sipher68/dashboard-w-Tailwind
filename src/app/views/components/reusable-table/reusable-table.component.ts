import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { data } from 'src/data/mockdata';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { WritePostComponent } from '../write-post/write-post.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { SearchComponent } from '../search/search.component';
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
    SearchComponent,
  ],
})
export class ReusableTableComponent {
  @Input() tableName!: string;
  public table: any;

  public routeID: any;

  public searchValue: any;

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

    // Configure table data based on Operator ID AND OR searchValue
    if (this.routeID) {
      let operatorName = data.Operators[this.routeID - 1].Operator_Name;
      this.tableName = operatorName;

      // Subscribe to the search value
      this.sharedService.searchValue$.subscribe((searchValue) => {
        this.searchValue = searchValue;

        // If no search value is entered, set table to all PAO and Drivers from the selected Operator
        // If a search value is entered, set table to the filtered PAO and Drivers from the selected Operator
        this.table = !this.searchValue
          ? Object.values(
              data.PAO.filter((x) => x.Operator_ID == this.routeID - 1)
            ).concat(
              data.Drivers.filter((x) => x.Operator_ID == this.routeID - 1)
            )
          : Object.values(
              data.PAO.filter((x) => x.Operator_ID == this.routeID - 1)
            )
              .concat(
                data.Drivers.filter((x) => x.Operator_ID == this.routeID - 1)
              )
              .filter((x) =>
                x.Name.toLowerCase().includes(this.searchValue.toLowerCase())
              );
      });
      // Displays the Drivers and PAO of the selected Operator
    }

    // Switch statement to configure table data based on tableName
    // If no search value is entered, set table to all PAO and Drivers
    // If a search value is entered, set table to the filtered PAO and Drivers
    switch (this.tableName) {
      case 'PAO':
        this.sharedService.searchValue$.subscribe((searchValue) => {
          this.searchValue = searchValue;
          this.table = !this.searchValue
            ? Object.values(data.PAO)
            : Object.values(data.PAO).filter((x) =>
                x.Name.toLowerCase().includes(this.searchValue.toLowerCase())
              );
        });
        break;
      case 'Drivers':
        this.sharedService.searchValue$.subscribe((searchValue) => {
          this.searchValue = searchValue;
          this.table = !this.searchValue
            ? Object.values(data.Drivers)
            : Object.values(data.Drivers).filter((x) =>
                x.Name.toLowerCase().includes(this.searchValue.toLowerCase())
              );
        });
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
