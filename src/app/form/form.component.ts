import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  empName: string = '';
  empAge: number = null;
  empSex: string = ' ';
  

  constructor(private empdataService: EmpdataService) {}

  ngOnInit(): void {}
  onSubmitDetails() {
    this.empdataService.addEmp(this.empName, this.empAge, this.empSex);

    // After submit below code will reset the form
    this.empName ='';
    this.empAge = null;
    this.empSex = '';
  }
}
