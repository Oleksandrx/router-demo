import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BackendService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
