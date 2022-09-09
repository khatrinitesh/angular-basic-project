import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contentNitesh: boolean = false;
  contentSachin: boolean = true;
  contentRahul: boolean = true;
  contentVishal: boolean = true;
  radiotitle: string;
  radioItems: Array<string>
  genderItems: Array<string>
  gender: any;
  model = {
    option: 'option1'
  }
  genderModel = {
    option: 'male'
  }




  msg: string = 'Welcome to angular version 8'

  toDate: Date = new Date();

  data1 = {
    name: 'nitesh',
    age: 33,
    email: 'nitesh.khatri88@gmail.com'
  }
  data2 = {
    name: 'sachin',
    age: 45,
    email: 'sachin210000@gmail.com'
  }
  data3 = {
    name: 'dhoni',
    age: 41,
    email: 'dhoni@gmail.com'
  }
  data4 = {
    name: 'rahul',
    age: 45,
    email: 'rahul.dravid@gmail.com'
  }

  // dataTwo = {
  //   name: 'sameet',
  //   age: 40,
  //   email: 'sameet210000@gmail.com'
  // }

  // table data and modal
  selectedUser?: any;
  users: any = [
    { id: 1, name: 'Jitesh Meniya', email: 'jiteshmeniya99@gmail.com' },
    { id: 2, name: 'Hardik Savani', email: 'hardiksavani19@gmail.com' },
    { id: 3, name: 'Harsukh Makwana', email: 'harsukh21@gmail.com' }
  ];
  onClick(user: any) {
    this.selectedUser = user
  }
  // table data and modal

  constructor() {
    this.radiotitle = 'Radio Button in Angular'
    this.radioItems = ['option1', 'option2', 'option3', 'option4']
    this.gender = 'female'
    this.genderItems = ['male', 'female']
  }

  ngOnInit() {
  }

  // basic data
  title = 'angular-basic-project';
  fname = 'nitesh';
  lname = 'khatri'
  age = 33

}
