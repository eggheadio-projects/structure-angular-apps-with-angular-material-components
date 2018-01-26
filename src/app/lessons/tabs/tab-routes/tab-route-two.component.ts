import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'egm-tab-route-two',
  template: `
    <h2> Second Tab Content </h2>
    <p>
    Nam sit amet tempor magna, quis rhoncus erat.
    Aenean varius risus aliquam risus ullamcorper faucibus ac imperdiet ante.
    </p>
  `
})
export class TabRouteTwoComponent implements OnInit {
  ngOnInit() {}
}
