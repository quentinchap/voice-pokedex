import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LuisService {

  key: string = "b31ea8ef-cb14-4e04-9885-c17126be608d";
  subscriptionKey: string ="test";


  urlApi: string = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/"+this.key+"?subscription-key="+this.subscriptionKey+"&verbose=true&q=";

  constructor(public http:Http) { }

  getEntities(utterance: string)
  {
    return this.http.get(this.urlApi+utterance);
  }

}