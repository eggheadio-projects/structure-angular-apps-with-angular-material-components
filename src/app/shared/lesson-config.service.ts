import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LessonConfigService {
  private useStandardRecordingStyles = new BehaviorSubject(true);

  removeStandardRecordingStyles() {
    this.useStandardRecordingStyles.next(false);
  }

  addStandardRecordingStyles() {
    this.useStandardRecordingStyles.next(true);
  }

  get shouldUseStandardStyles() {
    return this.useStandardRecordingStyles.asObservable();
  }
}
