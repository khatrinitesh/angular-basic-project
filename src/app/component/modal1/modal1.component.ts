import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss']
})
export class Modal1Component implements OnInit {
  @Input() user?: any;
  constructor() { }

  ngOnInit() {
  }

}
