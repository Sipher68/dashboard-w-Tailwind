import { Component } from '@angular/core';
import { data } from 'src/data/mockdata';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class SummaryComponent {
  public TO = data.Operators;

  public TOcount = Object.keys(this.TO).length;

  public jeepArr: any = Object.values(this.TO);

  public jeepCount = 0;

  public paoCount = Object.keys(data.PAO).length;

  public driverCount = Object.keys(data.Drivers).length;

  public summaryItems: any[] = [];

  ngOnInit() {
    for (let i = 0; i < this.TOcount; i++) {
      this.jeepCount = this.jeepCount + this.jeepArr[i]['Jeepney_Count'];
    }
    this.summaryItems = [
      { title: 'No. of Transport Operators', count: this.TOcount },
      { title: 'No. of Jeepneys', count: this.jeepCount },
      { title: 'No. of PAO', count: this.paoCount },
      { title: 'No. of Drivers', count: this.driverCount },
    ];
  }
}
