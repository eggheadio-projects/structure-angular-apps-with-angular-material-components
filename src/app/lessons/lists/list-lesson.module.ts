import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { ListLessonComponent } from './list-lesson.component';

@NgModule({
  declarations: [ListLessonComponent],
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule]
})
export class ListLessonModule {}
