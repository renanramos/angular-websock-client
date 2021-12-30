import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StompConfig, StompService } from '@stomp/ng2-stompjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { stompConfig } from './rx-stomp.config';

@NgModule({
  declarations: [
    AppComponent
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
