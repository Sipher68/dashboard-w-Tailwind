import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { data } from 'src/data/mockdata';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { SharedService } from 'src/app/services/shared.service';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.scss'],
  standalone: true,
  imports: [PageHeaderComponent, NgFor, SearchComponent],
})
export class BlacklistComponent {
  constructor(private sharedService: SharedService) {}
  public blackLists: any;
  public searchValue: any;

  ngOnInit() {
    this.sharedService.searchValue$.subscribe((searchValue) => {
      this.searchValue = searchValue;

      this.blackLists = !this.searchValue
        ? Object.values(data.Blacklisted)
        : Object.values(data.Blacklisted).filter((x) =>
            x.Name.toLowerCase().includes(this.searchValue.toLowerCase())
          );
    });
  }
}
