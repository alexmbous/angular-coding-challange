import { NgModule } from '@angular/core';
import { Nutrition} from './nutrition';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Nutrition
  ],
  imports: [
    IonicPageModule.forChild(Nutrition)
  ]
})
export  class NutritionModule {}
