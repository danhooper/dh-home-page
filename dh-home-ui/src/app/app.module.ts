import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RSSService } from './rss.service';
import { DhFeedListComponent } from './dh-feed-list/dh-feed-list.component';
import { DhFeedComponent } from './dh-feed/dh-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    DhFeedListComponent,
    DhFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RSSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
