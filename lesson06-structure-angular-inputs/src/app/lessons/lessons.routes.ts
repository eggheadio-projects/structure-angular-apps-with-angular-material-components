import { Route } from '@angular/router';

import { InputsLessonComponent } from './inputs/inputs-lesson.component';


export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'inputs',
    component: InputsLessonComponent,
    data: {
      shortName: 'Inputs',
      lessonName:
        'Manage User Input with Material Design Inputs and AutoComplete'
    }
  },
  
];

