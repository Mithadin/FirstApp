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

  addEmp(name: string, age: number, gender: string) {
    this.empObjArray.push({
      empName: name,
      empAge: age,
      empSex: gender
    });
  }

  get(): Employee[] {
    return this.empObjArray;
  }

  removeEmp(position: number) {
    this.empObjArray.splice(position, 1);
  }
}
