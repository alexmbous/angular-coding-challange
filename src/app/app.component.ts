import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from 'ionic-native/dist/es5/plugins/statusbar';
import { Landing } from '../pages/landing/landing';
import {Splashscreen} from 'ionic-native/dist/es5/plugins/splashscreen';

@Component({
  templateUrl: './app.component.html',
})
export class AppComponent {
  landingPage: any = Landing;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: Splashscreen) {
    platform.ready().then(() => {
// TODO: not sure why but I am getting an error with the stylelightcontent and hide.
      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }}
