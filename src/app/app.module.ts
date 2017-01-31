import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppModuleRoutingModule } from './app-module-routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppModuleRoutingModule,
    HttpModule
  ],
  providers: [{ provide: "windowObject", useValue: window}],
  bootstrap: [AppComponent]
})
export class AppModule { }
