import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from 'ionic-native/dist/es5/plugins/statusbar';
import {Splashscreen} from 'ionic-native/dist/es5/plugins/splashscreen';
import { NavProxyService } from '../services/NavProxy.service';
import { AppComponent } from './app.component';
import {
  ItemsPage,
  ItemPage,
  PlaceholderPage } from '../pages';

@NgModule({
  declarations: [
    AppComponent,
    ItemsPage,
    ItemPage,
    PlaceholderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    ItemsPage,
    ItemPage,
    PlaceholderPage
  ],
  providers: [
    NavProxyService,
    StatusBar,
    Splashscreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
