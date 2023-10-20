import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-action-center',
  templateUrl: './action-center.component.html',
  styleUrls: ['./action-center.component.scss'],
  standalone: true,
  imports: [PageHeaderComponent, TableComponent],
})
export class ActionCenterComponent {}
