import { Component, OnInit, Input, SimpleChanges, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, Response } from '@angular/common/http';
import studentsData from '../../json/students.json';

export interface category {
  id: number;
  name: string;
}

export interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  cssStringVar: string = 'red size20';
  showMe: boolean = true
  isLoggedIn: boolean = false
  data: any
  inputText: string = "nitesh khatri123"
  isShow: boolean = false;
  cond_val: boolean = false;
  option: boolean = true
  displayChild: boolean = false
  myInputValue: string = 'sameet111'
  parentCount = 0;
  students: Student[] = studentsData
  sh: number
  Counter = 0

  ParentComponent(data) {
    console.warn(data)
  }
  public items = [
    { name: 'Angular', active: true },
    { name: 'React', active: true },
    { name: 'Typescript', active: true },
    { name: 'FoxPro', active: false },
    { name: 'Javascript', active: true },
    { name: 'ASP.NET Core', active: true },
    { name: 'DBase', active: false }
  ]


  myArray = [1, 2, 3, 4, 5];
  selectedObject: category;
  categories = [
    { id: 1, name: 'JQuery' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Vue' },
    { id: 4, name: 'React' }
  ]
  selectedEntry: any;
  displayCounter(count) {
    this.parentCount = count
  }
  removeItem(obj) {
    this.myArray.splice(obj, 1)
  }

  onSelectionChange(student) {
    this.selectedEntry = student;
  }
  // myArray = [
  //   { id: 1, name: 'Hardik' },
  //   { id: 2, name: 'Paresh' },
  //   { id: 3, name: 'Rakesh' },
  //   { id: 3, name: 'Mahesh' },
  // ];

  // removeItem(obj) {
  //   this.myArray = this.myArray.filter(item => item !== obj)
  // }

  toggle() {
    this.displayChild = !this.displayChild
  }

  increment() {
    this.Counter++
  }
  decrement() {
    this.Counter--
  }

  // constructor
  constructor(private router: Router, private http: HttpClient) {
    console.log("AppComponent: Constructor");
    this.myInputValue = this.myInputValue
    this.sh = 1
  }

  // button next another page
  btnNext() {
    this.router.navigateByUrl('/courses')
  }

  // toggle status
  toggleStatus() {
    this.isShow = !this.isShow
    this.cond_val = !this.cond_val
  }
  receiveChildData(data) {
    this.data = data
  }

  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }

}
