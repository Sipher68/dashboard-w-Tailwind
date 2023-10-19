import { Component } from '@angular/core';
import { SummaryComponent } from './components/summary/summary.component';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [SummaryComponent, ChartComponent, TableComponent],
})
export class DashboardComponent {}
