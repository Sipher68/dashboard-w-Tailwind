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

  ngOnInit() {
    for (let i = 0; i < this.TOcount; i++) {
      this.jeepCount = this.jeepCount + this.jeepArr[i]['Jeepney_Count'];
    }
  }
}
