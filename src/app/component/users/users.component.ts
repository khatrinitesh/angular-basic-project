import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() hero;
  @Input() example;
  @Input() mom;

  constructor() { }

  ngOnInit() {
    console.warn(this.hero)
  }

}
