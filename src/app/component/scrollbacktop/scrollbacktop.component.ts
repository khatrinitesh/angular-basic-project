import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-scrollbacktop',
  templateUrl: './scrollbacktop.component.html',
  styleUrls: ['./scrollbacktop.component.scss']
})
export class ScrollbacktopComponent implements OnInit {

  // START SCROLL BACK TOP
  showScroll: boolean
  showScrollHeight = 200;
  hideScrollHeight = 200;


  constructor() { }
  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > this.showScrollHeight) {
      debugger;
      this.showScroll = true
    }
    else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      debugger;
      this.showScroll = false;
    }
  }

  ngOnInit(): void {
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    })();
  }

}
