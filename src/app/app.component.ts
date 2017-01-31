import { Component } from '@angular/core';
import { MicroService } from './services/micro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MicroService]
})
export class AppComponent {
  title = 'app works!';

  recording: boolean;

  constructor(public microService: MicroService) {
    this.recording = false;
  }

  startRecord() {
    if (!this.recording) {
      this.microService.startRecording();
      this.recording = true;
    }
  }

  stopRecord() {
    if (this.recording)
    {
      this.recording = false;
      this.microService.stopRecording();
    }
  }

}
