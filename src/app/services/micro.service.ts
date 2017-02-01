import { Injectable, Inject } from '@angular/core';
import * as RecordRTC from 'recordrtc';

@Injectable()
export class MicroService {

  constructor() {
  }

  recorder: any;
  recording: boolean;

  getAudioPermission() {
    return new Promise((resolve, reject) => {
      window.navigator.getUserMedia({
        audio: true
      }, function (stream) {
        resolve(stream);
      }, function (error) {
        reject(error);
      });

    });
  }

  startRecording() {
    let vm = this;
    console.log("start audio record");
    this.getAudioPermission()
      .then(stream => {
        this.recorder = new RecordRTC(stream, {
          type: 'audio',
          numberOfAudioChannels: 1
        });
        this.recorder.startRecording();
        this.recording = true;
      }).catch(function (error) {
        console.error(error);
      });
  }

  stopRecording() {
    let vm = this;

    return new Promise((resolve, reject) => {
      this.recorder.stopRecording(function () {
        vm.recording = false;
        vm.recorder.save('file-name');
        resolve(vm.recorder.getBlob());
      });
    });

  }

  isRecording() {
    return this.recording;
  }


}
