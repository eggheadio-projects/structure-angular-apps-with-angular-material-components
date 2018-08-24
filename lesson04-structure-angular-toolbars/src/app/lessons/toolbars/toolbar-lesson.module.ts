import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { ToolbarLessonComponent } from './toolbar-lesson.component';

@NgModule({
  declarations: [ToolbarLessonComponent],
  imports: [CommonModule, MatToolbarModule]
})
export class ToolbarLessonModule {}
