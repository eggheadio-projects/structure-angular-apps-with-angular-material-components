import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { LessonConfigService } from '../../shared/lesson-config.service';
import { AppComponent } from '../../app.component';
import { takeUntil } from 'rxjs/operators';

export const SCROLL_CONTAINER = '.mat-drawer-content';
export const PRIMARY_TEXT_THRESHOLD = 22;
export const PRIMARY_SHADOW_THRESHOLD = 78;

@Component({
  selector: 'egm-toolbar-lesson',
  templateUrl: './toolbar-lesson.component.html',
  styleUrls: ['./toolbar-lesson.component.scss']
})
export class ToolbarLessonComponent implements OnInit, OnDestroy {
  public popText: boolean;
  public applyShadow: boolean;
  private _onDestroy = new Subject();

  constructor(private _lessonConfigService: LessonConfigService) {
    this._lessonConfigService.removeStandardRecordingStyles();
  }

  ngOnInit() {
    const container = document.querySelector(SCROLL_CONTAINER);

    fromEvent(container, 'scroll')
      .pipe(takeUntil(this._onDestroy))
      .subscribe(_ => this.determineHeader(container.scrollTop));
  }

  determineHeader(top: number) {
    if (top >= PRIMARY_TEXT_THRESHOLD) {
      this.popText = true;
    } else {
      this.popText = false;
    }

    if (top >= PRIMARY_SHADOW_THRESHOLD) {
      this.applyShadow = true;
    } else {
      this.applyShadow = false;
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._lessonConfigService.addStandardRecordingStyles();
  }
}
