import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { ReusableTableComponent } from '../../components/reusable-table/reusable-table.component';

@Component({
  selector: 'app-pao',
  templateUrl: './pao.component.html',
  styleUrls: ['./pao.component.scss'],
  standalone: true,
  imports: [PageHeaderComponent, ReusableTableComponent],
})
export class PaoComponent {}
