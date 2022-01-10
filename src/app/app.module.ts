import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StompConfig, StompService } from '@stomp/ng2-stompjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { stompConfig } from './rx-stomp.config';
import { FriendsListComponent } from './context/friends-list/friends-list.component';
import { HobbitListComponent } from './context/hobbit-list/hobbit-list.component';
import { CardInfoComponent } from './context/card-info/card-info.component';
import { LoaderComponent } from './util/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    HobbitListComponent,
    CardInfoComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
