import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { IconsLessonComponent } from './icons-lesson.component';

@NgModule({
  declarations: [IconsLessonComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule]
})
export class IconsLessonModule {}
