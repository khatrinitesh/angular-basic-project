import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() inputFromParent: string;
  @Output() outputFromChild: EventEmitter<string> = new EventEmitter();
  outputText: string = 'Hi ...message from child';
  constructor() { }

  ngOnInit() {
    console.log(this.inputFromParent)
  }

  sendDataToParent() {
    this.outputFromChild.emit(this.outputText)
  }

}
