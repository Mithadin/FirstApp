import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private empdataService: EmpdataService) {}

  ngOnInit(): void {}
  onSubmitDetails(name: string, age: number, gender: string) {
    this.empdataService.addEmp(name, age, gender);
  }
}
