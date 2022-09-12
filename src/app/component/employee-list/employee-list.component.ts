import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() myinputMsg: string;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMessage: string = 'I am a child component'

  constructor() { }

  ngOnInit() {
    console.log(this.myinputMsg);
  }

  sendValues() {
    this.myOutput.emit(this.outputMessage)
  }

}
