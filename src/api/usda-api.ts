import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=aUrJkzQ58M2zqKYMogOMJMozAbsf21YlZLVbp7Hj&location=Denver+CO

// aUrJkzQ58M2zqKYMogOMJMozAbsf21YlZLVbp7Hj

@Injectable()
export class UsdaApi {

  private API_KEY = 'aUrJkzQ58M2zqKYMogOMJMozAbsf21YlZLVbp7Hj';

  search(data: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get('https://api.nal.usda.gov/ndb/search/?format=json&api_key=' + this.API_KEY +  '&q=' + data).map(res => res.json());
  }

  getInfo(id: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.nal.usda.gov/ndb/reports/?format=json&api_key=' + this.API_KEY +  '&ndbno=' + id).map(res => res.json());  }
}


