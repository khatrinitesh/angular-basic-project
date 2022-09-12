import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  posts: any[] = []

  constructor(private http: HttpClient) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts`).subscribe((posts: any) => {
      this.posts = posts;
    });
  }

  ngOnInit() {
  }

}
