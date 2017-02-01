import { Component, OnInit, Output } from '@angular/core';

import { MicroService } from '../services/micro.service';

import { SpeechToTextService } from '../services/speech-to-text.service';
import { LuisService } from '../services/luis.service';

@Component({
  selector: 'app-voice-bar',
  templateUrl: './voice-bar.component.html',
  styleUrls: ['./voice-bar.component.css'],
  providers: [MicroService, SpeechToTextService, LuisService]
})
export class VoiceBarComponent implements OnInit {

  recording: boolean;
  audio: any;

  constructor(public microService: MicroService, public speechToTextService: SpeechToTextService, public luis: LuisService) {

    this.recording = false;
    this.speechToTextService.getAuthToken();

  }

  ngOnInit() {
  }

  startRecord() {
    if (!this.recording) {
      this.microService.startRecording();
      this.recording = true;
    }
  }


  getLuisReturn(utterance: string) {
    this.luis.getEntities(utterance).subscribe(res => console.log(res.json()));
  }


  stopRecord() {

    if (this.recording) {
      this.recording = false;
      this.microService.stopRecording().then(res => {/*this.speechToTextService.getTextFromAudio(res).subscribe(res => this.getLuisReturn(res))*/
      });
    }
  }

}
