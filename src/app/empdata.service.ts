import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {
  public empObjArray: Employee[] = [
    {
      empName: 'Mith',
      empDesig: 'UI Devloper',
      empAge: 25
    },
    {
      empName: 'Divi',
      empDesig: 'Senior UI Devloper',
      empAge: 31
    },
    {
      empName: 'Balaji',
      empDesig: 'UI Devloper',
      empAge: 25
    },
    {
      empName: 'Karthi',
      empDesig: 'Hardware Engg',
      empAge: 32
    }
  ];
  constructor() {}
  getter(): Employee[] {
    return this.empObjArray;
  }
}
