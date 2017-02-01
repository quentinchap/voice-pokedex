import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LuisService {


  urlApi: string = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/73fd3250-a8c1-4a30-a3ac-840d3ff9f2d7?subscription-key=e1ec91e58eae4828bba6ac2fcec27f09&verbose=true&q=";

  constructor(public http:Http) { }

  getEntities(utterance: string)
  {
    return this.http.get(this.urlApi+utterance);
  }

}
