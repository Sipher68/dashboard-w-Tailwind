import { Component } from '@angular/core';
import { ReusableTableComponent } from '../../components/reusable-table/reusable-table.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  standalone: true,
  imports: [ReusableTableComponent, PageHeaderComponent],
})
export class DriverComponent {}
