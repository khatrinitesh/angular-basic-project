import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employeeData: any;

  constructor() { }

  ngOnInit(): void {
    this.employeeData = {
      name: 'Test EmployeeName',
      email: 'Test1@testemail.com'
    };
    console.log(this.employeeData.name);
  }

  changed(employeeData: any) {
    this.employeeData = employeeData
  }


}
