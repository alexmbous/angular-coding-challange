import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html'
})
export class Nutrition {
  public food;
  public name;
  public nutrition;
  public open;

  constructor(public navController: NavController, public navParamators: NavParams ){
    this.food = this.navParamators.data.food;
    this.nutrition = this.navParamators.data.nutrition;
    this.open = false;
  }
}

