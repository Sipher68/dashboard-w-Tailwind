import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-transport-operators',
  templateUrl: './transport-operators.component.html',
  styleUrls: ['./transport-operators.component.scss'],
  standalone: true,
  imports: [PageHeaderComponent, TableComponent],
})
export class TransportOperatorsComponent {}
