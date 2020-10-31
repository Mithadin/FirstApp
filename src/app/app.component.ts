import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmpdataService } from './empdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  deisignation: string;
  empdatadetails: Employee[] = [];

  constructor(private empDataService: EmpdataService) {}
  ngOnInit() {
    this.empdatadetails = this.empDataService.get();
  }

  changeName(e: Employee) {
    this.title = e.empName;
    this.deisignation = e.empDesig;
  }
}
