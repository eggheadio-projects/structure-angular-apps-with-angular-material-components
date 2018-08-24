import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { LESSON_ROUTES } from './lessons/lessons.routes';
import { IconsLessonComponent } from './lessons/icons/icons-lesson.component';

export const EGGHEAD_MATERIAL_ROUTES: Routes = [
  {
    path: 'icons',
    component: IconsLessonComponent,
    data: {
      shortName: 'Icons',
      lessonName: 'Utilize Material Design Icons for App Icons and Buttons'
    }
  },
  { path: '**', redirectTo: LESSON_ROUTES[0].path }
];
