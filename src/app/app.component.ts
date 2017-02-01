import { Component } from '@angular/core';
import { SpeechToTextService } from './services/bing-speech.service';
import { LuisService } from './services/luis.service';
import { MicroService } from './services/micro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MicroService, SpeechToTextService, LuisService]
})
export class AppComponent {
  title = 'app works!';

  constructor() {
  }


}
