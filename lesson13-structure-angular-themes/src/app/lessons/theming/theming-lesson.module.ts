import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { ThemingLessonComponent } from './theming-lesson.component';

@NgModule({
  declarations: [ThemingLessonComponent],
  imports: [CommonModule, MatToolbarModule]
})
export class ThemingLessonModule {}
