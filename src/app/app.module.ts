import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import  localeES  from "@angular/common/locales/es-MX";
import  localePT  from "@angular/common/locales/pt";
import  localeFR  from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeES);
registerLocaleData(localePT);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: "es-MX"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
