import { Component, OnInit } from '@angular/core';
import { LeaderboardsService } from '../out_spec';
import { Score } from '../out_spec';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  results$: Score[] = [];
  _service: LeaderboardsService;


  addResultForm = new FormGroup({
    player: new FormControl(''),
    score: new FormControl()
  });

  constructor(private readonly service: LeaderboardsService) {
    this._service = service;
  }


  ngOnInit() {
    this.getTop10();
  }

  getTop10() {
    this._service.getTop10().subscribe(results => this.results$ = results);
  }

  onSubmit(e) {
    e.preventDefault();
    this._service.addResult({
      player: this.addResultForm.value.player,
      score: this.addResultForm.value.score
    }).subscribe(
      () => {
        this.getTop10();
        this.addResultForm.reset()
      }
    );
  }

}
