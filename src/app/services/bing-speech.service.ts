import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { GUID } from '../utils/guid';
import { Observable } from 'rxjs/Observable';

import * as RecordRTC from 'recordrtc';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class SpeechToTextService {

  urlApi: string = "https://speech.platform.bing.com";
  authUrl: string = "https://api.cognitive.microsoft.com/sts/v1.0/issueToken";
  headers: any;
  headersSynthetize: any;
  headersRecognize: any;
  token: string;
  authorization: string;

  audio: any;

  speechBuffer: any;

  recorder: any;

  constructor(private http: Http)
  { }

  getAuthToken() {
    this.headers = {
      "Ocp-Apim-Subscription-Key": "a4adcb07aee44ddfa64d8dcb832815c3"
    };
    this.http.post(this.authUrl, {}, { headers: this.headers }).subscribe(
      res => {
        this.token = res.text();
        this.authorization = "Bearer " + res.text();
        this.getAudioFromText("Bonjour comment tu vas ?");
      });
  }

  getTextFromAudio(audio) {

    let textToSpeechComplet = new EventEmitter();
    let recognizeParam = "?version=3.0";


    this.headersRecognize = {
      "Ocp-Apim-Subscription-Key": "a4adcb07aee44ddfa64d8dcb832815c3",
      "Content-Type": "audio/wav; samplerate=16000",
      "Authorization": this.authorization
    };


    recognizeParam += "&requestid=" + GUID.getNewGUIDString();
    recognizeParam += "&appID=D4D52672-91D7-4C74-8AD8-42B1D98141A5";
    recognizeParam += "&format=json";
    recognizeParam += "&locale=fr-FR";
    recognizeParam += "&device.os=cross";
    recognizeParam += "&scenarios=ulm";
    recognizeParam += "&instanceid=" + GUID.getNewGUIDString();

    this.http.post(this.urlApi + "/recognize" + recognizeParam, audio, { headers: this.headersRecognize }).subscribe(res => textToSpeechComplet.emit(res.json().results[0].name));

    return textToSpeechComplet;
  }


  getAudioFromText(response: string) {

    this.headersSynthetize = {
      "X-Microsoft-OutputFormat": "audio-16khz-32kbitrate-mono-mp3",
      "Content-Type": "application/ssml+xml",
      "Authorization": this.authorization,
      "Ocp-Apim-Subscription-Key": "a4adcb07aee44ddfa64d8dcb832815c3",
      "X-Search-AppId": "a4adcb07aee44ddfa64d8dcb832815c3",
      "X-Search-ClientID": "a4adcb07aee44ddfa64d8dcb832815c3",
    };

    let body: string = "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='http://www.w3.org/2001/mstts' xml:lang='fr-FR'><voice name='Microsoft Server Speech Text to Speech Voice (fr-FR, Julie, Apollo)'>Bienvenue sur démo en ligne de Texte à parole.</voice></speak>";

    this.http.post(this.urlApi + "/synthesize", body, { headers: this.headersSynthetize }).subscribe(res => {
      var context = new AudioContext();

      /*let blob = new Blob([res], { type: 'audio/mpeg' });
      this.audio = new Audio();
      this.audio.src = res;//window.URL.createObjectURL(blob);
      this.audio.load();
      this.audio.play();*/


    });
  }

  playAudio() {
    var context = new AudioContext();

    var source = context.createBufferSource();
    source.buffer = this.speechBuffer;
    source.connect(context.destination);
    source.start(0);
  }

}
