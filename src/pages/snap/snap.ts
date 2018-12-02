import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-snap',
  templateUrl: 'snap.html'
})
export class SnapPage {
  constructor(private camera: Camera) {
  }
  public base64Image: string;
  takePicture(){
      const options: CameraOptions = {
          destinationType: this.camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000,
          saveToPhotoAlbum: true
      }
      this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
          }, (err) => {
                console.log(err);
          });
  }
}
