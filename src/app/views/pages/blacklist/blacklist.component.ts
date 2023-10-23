import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { data } from 'src/data/mockdata';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.scss'],
  standalone: true,
  imports: [PageHeaderComponent, NgFor],
})
export class BlacklistComponent {
  public blackLists = Object.values(data.Blacklisted);
}
