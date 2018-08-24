import { Route } from '@angular/router';

import { LoadingLessonComponent } from './loading/loading-lesson.component';


export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'loading',
    component: LoadingLessonComponent,
    data: {
      shortName: 'Loading',
      lessonName: 'Loading Lesson'
    }
  },
  
];

