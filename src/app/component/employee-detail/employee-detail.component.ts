import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent implements OnInit {

  public items: any = [
    {
      name: "nitesh",
    },
    {
      name: "rahul",
    },
    {
      name: "sachin",
    },
    {
      name: "zaheer khan",
    },
    {
      name: "anil kumble",
    },
    {
      name: "yurvaj singh",
    },

  ]

  @Input() public employeeData: any;
  @Output() public employeeChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.employeeData.name);
  }

  employeeChange() {
    this.employeeData.name = 'name changed from employeeDetail';
    this.employeeChanged.emit(this.employeeData)
  }

}
