import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';

import localeEnGb from '@angular/common/locales/en-GB';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEnGb, 'en-GB');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
