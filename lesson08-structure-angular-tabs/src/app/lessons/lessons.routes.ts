import { Route } from '@angular/router';

import { TabsLessonComponent } from './tabs/tabs-lesson.component';
import { TabRouteOneComponent } from './tabs/tab-routes/tab-route-one.component';
import { TabRouteTwoComponent } from './tabs/tab-routes/tab-route-two.component';

export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'tabs',
    component: TabsLessonComponent,
    data: {
      shortName: 'Tabs',
      lessonName: 'Tabs Lesson'
    },
    children: [
      {
        path: 'tab-route-one',
        component: TabRouteOneComponent
      },
      {
        path: 'tab-route-two',
        component: TabRouteTwoComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tab-route-one'
      }
    ]
  }
];

  


