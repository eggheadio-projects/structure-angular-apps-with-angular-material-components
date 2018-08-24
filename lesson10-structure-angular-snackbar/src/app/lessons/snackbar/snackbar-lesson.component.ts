import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';
import { CustomSnackBarComponent } from './custom-snackbar-element.component';

@Component({
  selector: 'egm-snackbar-lesson',
  templateUrl: './snackbar-lesson.component.html',
  styleUrls: ['./snackbar-lesson.component.scss']
})
export class SnackbarLessonComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackbar(message: string) {
    const snackBar = this._snackBar.openFromComponent(CustomSnackBarComponent, {
      data: message,
      duration: 3000
    });

    snackBar.afterDismissed().subscribe(_ => {
      console.log('AFTER DISMISS!');
    });

    snackBar.onAction().subscribe(_ => {
      console.log('AFTER ACTION!');
    });
  }
}
