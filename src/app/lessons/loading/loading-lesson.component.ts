import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';
import { interval } from 'rxjs/observable/interval';
import { concat } from 'rxjs/observable/concat';
import { takeWhile, map, take, tap, ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'egm-loading-lesson',
  templateUrl: './loading-lesson.component.html',
  animations: [
    trigger('fadeOut', [
      state('in', style({ opacity: 1 })),
      transition('* => void', [
        animate(
          `1s .5s ease-out`,
          style({
            opacity: 0
          })
        )
      ])
    ])
  ],
  styleUrls: ['./loading-lesson.component.scss']
})
export class LoadingLessonComponent implements OnInit {
  public loadingPercent = 0;
  public currentPlayback = 0;
  public queryValue = 0;
  public queryMode = 'query';

  ngOnInit() {
    this.loadingProgress(500).subscribe(i => (this.loadingPercent = i));

    this.loadingProgress(250).subscribe(i => (this.currentPlayback = i));

    // wait 5 seconds then switch mode to determinate, simulating waiting for response then download
    concat(
      interval(5000).pipe(
        take(1),
        tap(_ => (this.queryMode = 'determinate')),
        ignoreElements()
      ),
      this.loadingProgress(500)
    ).subscribe(i => (this.queryValue = i));
  }

  loadingProgress(speed: number) {
    return interval(speed).pipe(map(i => i * 10), takeWhile(i => i <= 100));
  }
}
