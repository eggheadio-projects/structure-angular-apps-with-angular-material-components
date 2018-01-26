import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MAT_PLACEHOLDER_GLOBAL_OPTIONS
} from '@angular/material';

import { InputsLessonComponent } from './inputs-lesson.component';

@NgModule({
  declarations: [InputsLessonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule]
  // If you wish to globally configure placeholder options
  // providers: [
  //   { provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' } }
  // ]
})
export class InputsLessonModule {}
