import { Component, OnInit } from '@angular/core';
import { LeaderboardsService } from '../out_spec';
import { Score } from '../out_spec';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  results$: Score[] = []
  _service: LeaderboardsService;

  constructor(private readonly service: LeaderboardsService ) {
    this._service = service
  }


  ngOnInit() {
    this.getTop10()
  }

  getTop10(){
    this._service.getTop10().subscribe(results => this.results$ = results)
  }


}
