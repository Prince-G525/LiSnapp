import { Media, MediaObject } from '@ionic-native/media';
import { Component } from '@angular/core';

@Component({
  selector: 'page-listen',
  templateUrl: 'listen.html'
})
export class ListenPage {
  constructor(private media: Media) {
  }
  rec:MediaObject; //= this.media.create('file'+this.date+'.mp3');;

  startrecord(){
      var date = new Date();
      this.rec = this.media.create('LiSnappClip '+date+'.mp3');
      this.rec.startRecord();
  }
  stoprecord(){
      this.rec.stopRecord();
  }
}
