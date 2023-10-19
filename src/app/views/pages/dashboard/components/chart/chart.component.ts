import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { data } from 'src/data/mockdata';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
})
export class ChartComponent {
  public chart: any;

  public jeepCount = Object.values(data.Operators);

  public countArr = new Array();

  ngOnInit() {
    for (let jeep of this.jeepCount) {
      this.countArr.push(jeep['Jeepney_Count']);
    }
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('Charts', {
      data: {
        datasets: [
          {
            type: 'bar',
            label: 'Bar Dataset',
            data: this.countArr,
            barThickness: 30,
            borderRadius: 10,
            order: 1,
            backgroundColor: '#1303fc',
          },
          {
            type: 'line',
            label: 'Line Dataset',
            data: this.countArr,
            borderColor: '#f5f5f5',
            backgroundColor: '#f5f5f5',
            fill: true,
            order: 2,
          },
        ],
        labels: [
          'Transport 1',
          'Transport 2',
          'Transport 3',
          'Transport 4',
          'Transport 5',
          'Transport 6',
          'Transport 7',
          'Transport 8',
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              stepSize: 10,
            },
          },
        },
      },
    });
  }
}
