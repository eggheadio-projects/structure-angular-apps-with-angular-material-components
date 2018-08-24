import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatDatepickerModule,
  MatInputModule,
  MatButtonModule,
  MatNativeDateModule
} from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { PlatformModule } from '@angular/cdk/platform';
import { DatepickerLessonComponent } from './datepicker-lesson.component';

@NgModule({
  declarations: [DatepickerLessonComponent],
  imports: [
    CommonModule,
    PlatformModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
    /*
     * If you wish to use momentjs dates rather than native JS dates
     * include the below module:
     */
    // MatMomentDateModule
  ]
})
export class DatepickerLessonModule {}
