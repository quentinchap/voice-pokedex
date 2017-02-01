import { Injectable } from '@angular/core';

@Injectable()
export class SpeakService {

  audio: any;
  constructor() { }

  playBlob(blob) {
    this.audio = new Audio();
    this.audio.src = window.URL.createObjectURL(blob);
    this.audio.load();
    this.audio.play();
  }


}
