import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { LESSON_ROUTES } from './lessons/lessons.routes';
import { ToolbarLessonComponent } from './lessons/toolbars/toolbar-lesson.component';

export const EGGHEAD_MATERIAL_ROUTES: Routes = [
  {
    path: 'toolbars',
    component: ToolbarLessonComponent,
    data: {
      shortName: 'Toolbars',
      lessonName: 'Utilize Material Design Toolbars for Application Headers'
    }
  },
  { path: '**', redirectTo: LESSON_ROUTES[0].path }
];
