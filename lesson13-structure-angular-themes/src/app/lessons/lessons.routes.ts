import { Route } from '@angular/router';

import { ThemingLessonComponent } from './theming/theming-lesson.component';

export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'theming',
    component: ThemingLessonComponent,
    data: {
      shortName: 'Theming',
      lessonName: 'Theming Lesson'
    },
  }
];

  


