import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

import { EGGHEAD_MATERIAL_ROUTES } from './app.routes';
import { AppMaterialModule } from './app-material.module';
import { LessonConfigService } from './shared/lesson-config.service';
import { AppComponent } from './app.component';

import { SnackbarLessonModule } from './lessons/snackbar/snackbar-lesson.module';
import { SnackbarLessonComponent } from './lessons/snackbar/snackbar-lesson.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    RouterModule.forRoot(EGGHEAD_MATERIAL_ROUTES),
    AppMaterialModule,
    SnackbarLessonModule,
  ],
  entryComponents: [SnackbarLessonComponent],
  providers: [LessonConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}