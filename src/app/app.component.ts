import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmpdataService } from './empdata.service';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;

  title: string;
  deisignation: string;
  empdatadetails: Employee[] = [];

  constructor(private empDataService: EmpdataService) {

    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }
  ngOnInit() {
    this.empdatadetails = this.empDataService.get();
  }

  changeName(e: Employee) {
    this.title = e.empName;
    this.deisignation = e.empDesig;
  }
}
