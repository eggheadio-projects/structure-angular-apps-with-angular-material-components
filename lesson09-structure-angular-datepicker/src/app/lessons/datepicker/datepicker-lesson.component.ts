import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
// import * as moment from 'moment';

@Component({
  selector: 'egm-datepicker-lesson',
  templateUrl: './datepicker-lesson.component.html',
  styleUrls: ['./datepicker-lesson.component.scss']
})
export class DatepickerLessonComponent {
  public startDate = new Date(2017, 10, 26);
  public minDate = new Date(2017, 9, 1);
  public maxDate = new Date(2017, 11, 24);

  constructor(private _platform: Platform) {}

  get isMobile() {
    return this._platform.ANDROID || this._platform.IOS;
  }
}
