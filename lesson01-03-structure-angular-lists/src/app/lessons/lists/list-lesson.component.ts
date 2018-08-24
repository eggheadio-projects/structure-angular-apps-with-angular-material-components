import { Component } from '@angular/core';

@Component({
  selector: 'egm-list-lesson',
  templateUrl: './list-lesson.component.html'
})
export class ListLessonComponent {
  public items = [
    { name: 'Item 1', description: 'This is a description' },
    { name: 'Item 2', description: 'Another description!' }
  ];

  logChange(event) {
    console.log(event);
  }
}
