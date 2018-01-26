import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule, MatIconModule } from '@angular/material';

import { TabsLessonComponent } from './tabs-lesson.component';
import { TabRouteOneComponent } from './tab-routes/tab-route-one.component';
import { TabRouteTwoComponent } from './tab-routes/tab-route-two.component';

@NgModule({
  declarations: [
    TabsLessonComponent,
    TabRouteOneComponent,
    TabRouteTwoComponent
  ],
  imports: [CommonModule, RouterModule, MatTabsModule, MatIconModule]
})
export class TabsLessonModule {}
