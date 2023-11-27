import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {DataProviderService} from './data-provider.service';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'
import { CommunicationModule } from './communication/communication.module';
import { BackEndCommunicationModule } from './back-end-communication/back-end-communication.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommunicationModule,
    BackEndCommunicationModule
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
