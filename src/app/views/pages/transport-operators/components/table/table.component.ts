import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { data } from 'src/data/mockdata';
import { ReusableTableComponent } from 'src/app/views/components/reusable-table/reusable-table.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, ReusableTableComponent],
})
export class TableComponent {
  public cardData = data.Operators;

  public cardValue: any;

  public showReusableTable = false;

  @Output() sendID = new EventEmitter<any>();

  //Send to other components
  id: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cardValue = Object.values(this.cardData);
  }

  onClick(id: number) {
    // Navigate to the operator's page
    this.router.navigate([`/transport-operators/${id}`]);
  }
}
