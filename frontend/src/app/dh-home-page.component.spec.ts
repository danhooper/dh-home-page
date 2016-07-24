import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DhHomePageAppComponent } from '../app/dh-home-page.component';

beforeEachProviders(() => [DhHomePageAppComponent]);

describe('App: DhHomePage', () => {
  it('should create the app',
      inject([DhHomePageAppComponent], (app: DhHomePageAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'dh-home-page works!\'',
      inject([DhHomePageAppComponent], (app: DhHomePageAppComponent) => {
    expect(app.title).toEqual('dh-home-page works!');
  }));
});
