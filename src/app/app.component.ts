import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, ActivatedRoute, Routes, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { pluck, map, filter, shareReplay } from 'rxjs/operators';
import { LessonConfigService } from './shared/lesson-config.service';
import { LESSON_ROUTES, LessonRoutes } from './lessons/lessons.routes';

@Component({
  selector: 'egm-app',
  templateUrl: './app.component.html',
  animations: [
    trigger('growInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale3d(.3, .3, .3)'
        }),
        animate(`150ms ease-in`)
      ]),
      transition('* => void', [
        animate(
          `150ms ease-out`,
          style({
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)'
          })
        )
      ])
    ])
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public lessons = LESSON_ROUTES;
  public routeMap = createRouteMap(LESSON_ROUTES);
  public header$: Observable<string>;
  public isSmallScreen: boolean;

  constructor(
    public lessonConfig: LessonConfigService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _breakpointObserver: BreakpointObserver
  ) {
    this.header$ = _router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(_ => this.routeMap[_router.url.replace('/', '')] || 'Tabs Lesson'),
      shareReplay(1)
    );
  }

  ngOnInit() {
    this._breakpointObserver
      .observe(['(max-width: 901px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}

export function createRouteMap(routes: LessonRoutes) {
  return routes.reduce((acc: { [key: string]: string }, route) => {
    return { ...acc, [route.path]: route.data.lessonName };
  }, {});
}
