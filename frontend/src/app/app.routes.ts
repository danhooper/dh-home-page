import { provideRouter, RouterConfig } from '@angular/router';
import { DhHomePageAppComponent }  from './dh-home-page.component';
import { DhNewFeedComponent }    from './dh-new-feed/dh-new-feed.component';
const routes: RouterConfig = [
  { path: 'home', component: DhHomePageAppComponent },
  { path: 'new-feed', component: DhNewFeedComponent }
];
export const appRouterProviders = [
  provideRouter(routes)
];
