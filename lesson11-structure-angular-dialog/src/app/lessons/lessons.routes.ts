import { Route } from '@angular/router';

import { DialogLessonComponent } from './dialogs/dialog-lesson.component';


export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'dialog',
    component: DialogLessonComponent,
    data: {
      shortName: 'Dialog',
      lessonName: 'Dialog Lesson'
    }
  },
  
];

