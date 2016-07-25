import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DhNewFeedComponent } from './dh-new-feed.component';

describe('Component: DhNewFeed', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DhNewFeedComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DhNewFeedComponent],
      (component: DhNewFeedComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DhNewFeedComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DhNewFeedComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-dh-new-feed></app-dh-new-feed>
  `,
  directives: [DhNewFeedComponent]
})
class DhNewFeedComponentTestController {
}

