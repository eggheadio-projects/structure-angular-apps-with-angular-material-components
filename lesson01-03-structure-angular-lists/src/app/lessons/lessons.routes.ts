import { Route } from '@angular/router';

import { ListLessonComponent } from './lists/list-lesson.component';
export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'lists',
    component: ListLessonComponent,
    data: {
      shortName: 'List',
      lessonName: 'List Lesson'
    }
  }
];

