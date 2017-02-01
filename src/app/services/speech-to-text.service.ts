import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { GUID } from '../utils/guid';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SpeechToTextService {

  urlApi: string = "https://speech.platform.bing.com";
  authUrl: string = "https://api.cognitive.microsoft.com/sts/v1.0/issueToken";
  headers: any;
  token: string;

  constructor(private http: Http) {
    this.headers = {
      "Ocp-Apim-Subscription-Key": "a4adcb07aee44ddfa64d8dcb832815c3",
      "Content-Type": "audio/wav; samplerate=16000"
    };

  }

  getAuthToken() {
    this.http.post(this.authUrl, {}, { headers: this.headers }).subscribe(
      res => {
        this.token = res.text();
        this.headers.Authorization = "Bearer " + res.text();
      });
  }

  getTextFromAudio(audio) {

    let textToSpeechComplet = new EventEmitter();
    let recognizeParam = "?version=3.0";

    recognizeParam += "&requestid=" + GUID.getNewGUIDString();
    recognizeParam += "&appID=D4D52672-91D7-4C74-8AD8-42B1D98141A5";
    recognizeParam += "&format=json";
    recognizeParam += "&locale=fr-FR";
    recognizeParam += "&device.os=cross";
    recognizeParam += "&scenarios=ulm";
    recognizeParam += "&instanceid=" + GUID.getNewGUIDString();

    this.http.post(this.urlApi + "/recognize" + recognizeParam, audio, { headers: this.headers }).subscribe(res => textToSpeechComplet.emit( res.json().results[0].name));

    return textToSpeechComplet;
  }


  getAudioFromText(response: string)
  {
    
  }

}
