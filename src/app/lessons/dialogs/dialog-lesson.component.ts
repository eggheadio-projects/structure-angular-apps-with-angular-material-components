import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { of } from 'rxjs/observable/of';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'egm-dialog-lesson',
  template: `
    <button mat-button (click)="openDialog()"> Open Dialog </button>
  `,
  styleUrls: ['./dialog-lesson.component.scss']
})
export class DialogLessonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: 'email'
    });

    dialogRef
      .afterClosed()
      .pipe(filter(r => !!r), mergeMap(_ => of('network request here')))
      .subscribe(console.log);
  }
}

// Basic example of dynamic dialog
@Component({
  selector: 'egm-dialog',
  template: `
    <h2 mat-dialog-title> Delete {{itemType}} </h2>
    <mat-dialog-content>
      Are you sure you want to delete this {{itemType}}?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close> Cancel </button>
      <button mat-button [mat-dialog-close]="true"> Yes </button>
    </mat-dialog-actions>
  `
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public itemType: string) {}
}
