import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-dh-main',
  templateUrl: 'dh-main.component.html',
  styleUrls: ['dh-main.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class DhMainComponent {

  constructor() {}

  ngOnInit() {
  }

}
