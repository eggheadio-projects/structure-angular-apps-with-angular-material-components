import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'egm-tab-route-one',
  template: `
    <h2> First Tab Content </h2>
    <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Donec erat elit, hendrerit quis ex sed, tincidunt imperdiet purus.
    Ut quis lacinia urna. Nam et ex vitae metus tincidunt tempus.
    </p>
 `
})
export class TabRouteOneComponent implements OnInit {
  ngOnInit() {}
}
