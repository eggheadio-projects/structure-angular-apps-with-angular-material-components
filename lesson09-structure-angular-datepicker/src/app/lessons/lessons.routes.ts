import { Route } from '@angular/router';

import { DatepickerLessonComponent } from './datepicker/datepicker-lesson.component';


export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'datepicker',
    component: DatepickerLessonComponent,
    data: {
      shortName: 'Datepicker',
      lessonName: 'Datepicker Lesson'
    }
  },
  
];

