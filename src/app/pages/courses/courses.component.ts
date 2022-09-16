import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Input() myValue = 'nitesh'
  @Input() username: string;
  @Input() count: number
  @Output() ParentComponent: EventEmitter<any> = new EventEmitter()

  @Input() parentCount: number;
  @Output() valueChange = new EventEmitter();
  counter = 0;

  sendData() {
    this.ParentComponent.emit('send data child to parent')
  }

  valueChanged() {
    this.counter += 1
    this.valueChange.emit(this.counter)
  }

  constructor(private router: Router) {
    console.log('constructor called')
  }
  maritalStatus = {
    status: "nothing selected"
  }
  statuses: string[] = [
    'Single',
    'Married',
    'Divorced',
    'Common-law',
    'Visiting'
  ]

  btnPrev() {
    this.router.navigateByUrl('/about')
  }

  fg = new FormGroup({
    myRadio: new FormControl()
  })

  toggle() {
    const fg = this.fg.get('myRadio')
    if (fg.disabled) {
      fg.enable()
    }
    else {
      fg.disable()
    }
  }

  ngOnInit() {
  }
}
