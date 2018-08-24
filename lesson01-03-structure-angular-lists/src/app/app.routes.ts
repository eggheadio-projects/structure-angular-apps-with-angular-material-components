import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { LESSON_ROUTES } from './lessons/lessons.routes';
import { ListLessonComponent } from './lessons/lists/list-lesson.component';

export const EGGHEAD_MATERIAL_ROUTES: Routes = [
  {
    path: 'lists',
    component: ListLessonComponent,
    data: {
      shortName: 'List',
      lessonName: 'List Lesson'
    }
  },
  { path: '**', redirectTo: LESSON_ROUTES[0].path }
];
