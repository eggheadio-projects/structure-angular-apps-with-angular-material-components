import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'egm-inputs-lesson',
  templateUrl: './inputs-lesson.component.html',
  providers: [CustomErrorStateMatcher],
  styleUrls: ['./inputs-lesson.component.scss']
})
export class InputsLessonComponent implements OnInit {
  public password = '';
  public name = '';

  constructor(public customErrorStateMatcher: CustomErrorStateMatcher) {}

  ngOnInit() {}
}
