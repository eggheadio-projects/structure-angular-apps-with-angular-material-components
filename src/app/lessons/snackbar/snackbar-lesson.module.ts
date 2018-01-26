import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatSnackBarModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { SnackbarLessonComponent } from './snackbar-lesson.component';
import { CustomSnackBarComponent } from './custom-snackbar-element.component';

@NgModule({
  declarations: [SnackbarLessonComponent, CustomSnackBarComponent],
  imports: [CommonModule, MatSnackBarModule, MatButtonModule, MatInputModule],
  bootstrap: [CustomSnackBarComponent]
})
export class SnackbarLessonModule {}
