import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cssStringVar: string = 'red size20';
  showMe: boolean = true
  isLoggedIn: boolean = false
  data: any
  inputText: string = "nitesh khatri123"
  isShow: boolean = false;
  cond_val: boolean = false;
  option: boolean = true
  option: male

  // constructor
  constructor(private router: Router) { }

  // button next another page
  btnNext() {
    this.router.navigateByUrl('/courses')
  }

  // toggle status
  toggleStatus() {
    this.isShow = !this.isShow
    this.cond_val = !this.cond_val
  }

  ngOnInit() {

  }
  receiveChildData(data) {
    this.data = data
  }


}
