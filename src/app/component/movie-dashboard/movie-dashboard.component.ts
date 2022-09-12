import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  constructor() { }

  public myFavoriteMovies: any[] = [
    'Encanto',
    'Spider-Man: No Way Home',
    "Harry Potter and the Sorcerer's Stone"
  ];

  selectedMovieToWatch(data: string) {
    debugger;
    alert(data);
  }

  ngOnInit() {
  }

}
