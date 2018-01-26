import { Component, OnInit } from '@angular/core';
import { LESSON_ROUTES } from '../lessons.routes';

@Component({
  selector: 'egm-tabs-lesson',
  templateUrl: './tabs-lesson.component.html',
  styleUrls: ['./tabs-lesson.component.scss']
})
export class TabsLessonComponent implements OnInit {
  public tabRoutes = LESSON_ROUTES.filter(r => r.path === 'tabs')
    .map(({ children }) => children)
    .reduce((acc, curr) => [...acc, ...curr], [])
    .filter(({ path }) => !!path);

  ngOnInit() {}
}
