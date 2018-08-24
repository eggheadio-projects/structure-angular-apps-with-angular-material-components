import { Route } from '@angular/router';

import { DataTableLessonComponent } from './datatable/datatable-lesson.component';


export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'datatable',
    component: DataTableLessonComponent,
    data: {
      shortName: 'Data Table',
      lessonName: 'Data Table Lesson'
    }
  },
  
];

