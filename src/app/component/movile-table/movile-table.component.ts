import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movile-table',
  templateUrl: './movile-table.component.html',
  styleUrls: ['./movile-table.component.scss']
})
export class MovileTableComponent implements OnInit {
  selectedMovie: string
  @Input() movieList: Array<string> = [];
  @Output() movieSelectorEventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  movieSelected(selectedMovie) {
    this.movieSelectorEventEmitter.emit(selectedMovie)
  }

}
