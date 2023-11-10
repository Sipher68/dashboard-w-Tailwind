import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { TableComponent } from './components/table/table.component';
import { ReusableTableComponent } from '../../components/reusable-table/reusable-table.component';

@Component({
  selector: 'app-transport-operators',
  templateUrl: './transport-operators.component.html',
  styleUrls: ['./transport-operators.component.scss'],
  standalone: true,
  imports: [NgIf, PageHeaderComponent, TableComponent, ReusableTableComponent],
})
export class TransportOperatorsComponent {}
