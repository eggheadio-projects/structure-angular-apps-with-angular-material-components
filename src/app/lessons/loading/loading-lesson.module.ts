import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { LoadingLessonComponent } from './loading-lesson.component';

@NgModule({
  declarations: [LoadingLessonComponent],
  imports: [CommonModule, MatProgressBarModule, MatProgressSpinnerModule]
})
export class LoadingLessonModule {}
