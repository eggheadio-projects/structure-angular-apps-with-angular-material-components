import { Route } from '@angular/router';

import { ListLessonComponent } from './lists/list-lesson.component';
import { IconsLessonComponent } from './icons/icons-lesson.component';
import { InputsLessonComponent } from './inputs/inputs-lesson.component';
import { ToolbarLessonComponent } from './toolbars/toolbar-lesson.component';
import { LoadingLessonComponent } from './loading/loading-lesson.component';
import { ThemingLessonComponent } from './theming/theming-lesson.component';
import { SnackbarLessonComponent } from './snackbar/snackbar-lesson.component';
import { DataTableLessonComponent } from './datatable/datatable-lesson.component';
import { DialogLessonComponent } from './dialogs/dialog-lesson.component';
import { DatepickerLessonComponent } from './datepicker/datepicker-lesson.component';
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
    path: 'icons',
    component: IconsLessonComponent,
    data: {
      shortName: 'Icons',
      lessonName: 'Utilize Material Design Icons for App Icons and Buttons'
    }
  },
  {
    path: 'toolbars',
    component: ToolbarLessonComponent,
    data: {
      shortName: 'Toolbars',
      lessonName: 'Utilize Material Design Toolbars for Application Headers'
    }
  },
  {
    path: 'inputs',
    component: InputsLessonComponent,
    data: {
      shortName: 'Inputs',
      lessonName:
        'Manage User Input with Material Design Inputs and AutoComplete'
    }
  },
  {
    path: 'lists',
    component: ListLessonComponent,
    data: {
      shortName: 'Lists',
      lessonName: 'Lists'
    }
  },
  {
    path: 'loading',
    component: LoadingLessonComponent,
    data: {
      shortName: 'Loading',
      lessonName: 'Loading Lesson'
    }
  },
  {
    path: 'snackbar',
    component: SnackbarLessonComponent,
    data: {
      shortName: 'Snackbar',
      lessonName: 'Snackbar Lesson'
    }
  },
  {
    path: 'dialog',
    component: DialogLessonComponent,
    data: {
      shortName: 'Dialog',
      lessonName: 'Dialog Lesson'
    }
  },
  {
    path: 'datepicker',
    component: DatepickerLessonComponent,
    data: {
      shortName: 'Datepicker',
      lessonName: 'Datepicker Lesson'
    }
  },
  {
    path: 'datatable',
    component: DataTableLessonComponent,
    data: {
      shortName: 'Data Table',
      lessonName: 'Data Table Lesson'
    }
  },
  {
    path: 'theming',
    component: ThemingLessonComponent,
    data: {
      shortName: 'Theming',
      lessonName: 'Theming Lesson'
    }
  },
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
