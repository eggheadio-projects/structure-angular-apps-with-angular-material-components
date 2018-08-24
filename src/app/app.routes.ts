import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { LESSON_ROUTES } from './lessons/lessons.routes';

export const EGGHEAD_MATERIAL_ROUTES: Routes = [
  ...LESSON_ROUTES,
  { path: '**', redirectTo: LESSON_ROUTES[0].path }
];
