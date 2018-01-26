import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { DataTableLessonComponent } from './datatable-lesson.component';

@NgModule({
  declarations: [DataTableLessonComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule]
})
export class DataTableLessonModule {}
