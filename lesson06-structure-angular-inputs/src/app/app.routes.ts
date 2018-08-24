import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { LESSON_ROUTES } from './lessons/lessons.routes';
import { InputsLessonComponent } from './lessons/inputs/inputs-lesson.component';

export const EGGHEAD_MATERIAL_ROUTES: Routes = [
  {
    path: 'inputs',
    component: InputsLessonComponent,
    data: {
      shortName: 'Inputs',
      lessonName:
        'Manage User Input with Material Design Inputs and AutoComplete'
    }
  },
  { path: '**', redirectTo: LESSON_ROUTES[0].path }
];
