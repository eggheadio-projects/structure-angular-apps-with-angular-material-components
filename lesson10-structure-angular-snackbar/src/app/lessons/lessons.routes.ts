import { Route } from '@angular/router';

import { SnackbarLessonComponent } from './snackbar/snackbar-lesson.component';


export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'snackbar',
    component: SnackbarLessonComponent,
    data: {
      shortName: 'Snackbar',
      lessonName: 'Snackbar Lesson'
    }
  },
  
];

