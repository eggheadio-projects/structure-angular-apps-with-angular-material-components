import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import {
  DialogLessonComponent,
  DialogComponent
} from '../dialogs/dialog-lesson.component';

@NgModule({
  declarations: [DialogLessonComponent, DialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class DialogLessonModule {}
