import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedComponent } from './feed/feed.component';
import { FeedService } from './feed.service';
import { NewFeedComponent } from './new-feed/new-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedComponent,
    NewFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [FeedService],
  bootstrap: [AppComponent],
  entryComponents: [NewFeedComponent]
})
export class AppModule { }
