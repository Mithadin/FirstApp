import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmpdataService } from '../empdata.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Output() nameChange = new EventEmitter<Employee>();

  constructor(private empdataService: EmpdataService) {}

  ngOnInit(): void {}
  callMe(el: Employee): void {
    this.nameChange.emit(el);
  }
  removeData(i) {
    this.empdataService.removeEmp(i);
  }
}
