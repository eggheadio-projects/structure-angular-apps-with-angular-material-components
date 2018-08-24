import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'egm-icons-lesson',
  templateUrl: './icons-lesson.component.html',
  styleUrls: ['./icons-lesson.component.scss']
})
export class IconsLessonComponent implements OnInit {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer
  ) {
    _iconRegistry.addSvgIcon(
      'custom-camera',
      _sanitizer.bypassSecurityTrustResourceUrl(
        'assets/custom-icons/custom-camera.svg'
      )
    );
  }

  ngOnInit() {}
}
