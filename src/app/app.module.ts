import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppModuleRoutingModule } from './app-module-routing';
import { AppComponent } from './app.component';
import { VoiceBarComponent } from './voice-bar/voice-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    VoiceBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppModuleRoutingModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [{ provide: "windowObject", useValue: window}, { provide: "audio", useValue: Audio}],
  bootstrap: [AppComponent]
})
export class AppModule { }
