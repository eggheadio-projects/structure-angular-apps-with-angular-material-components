import {
  Component,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OPERATOR_INFO } from './fake-data';

@Component({
  selector: 'egm-datatable-lesson',
  templateUrl: './datatable-lesson.component.html',
  styleUrls: ['./datatable-lesson.component.scss']
})
export class DataTableLessonComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource(OPERATOR_INFO);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}


