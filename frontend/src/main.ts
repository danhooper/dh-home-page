import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { DhMainComponent } from './app/dh-main/dh-main.component';
import { environment } from './app';
import { appRouterProviders } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(DhMainComponent, [HTTP_PROVIDERS, appRouterProviders]);
