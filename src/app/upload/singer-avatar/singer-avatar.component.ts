import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {error} from 'protractor';

@Component({
  selector: 'app-singer-avatar',
  templateUrl: './singer-avatar.component.html',
  styleUrls: ['./singer-avatar.component.scss']
})
export class SingerAvatarComponent implements OnInit {
  selectFile: File;
  fileInFilebase: AngularFireStorageReference;
  urlFire : String;
  checkkUpload = false;
  @Output()
  urlformFirebase = new EventEmitter<String>()
  constructor(private adService: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  onChangerFile($event) {
    console.log('eveennnnnn,', $event);
    this.selectFile = $event.target.files[0];
  }

  uploadFile() {
    this.checkkUpload = true;
    this.fileInFilebase = this.adService.ref(this.selectFile.name);
    this.fileInFilebase.put(this.selectFile).then(data =>{
      return data.ref.getDownloadURL();
    }).then(url =>{
      this.checkkUpload = false;
      this.urlFire = url;
      this.urlformFirebase.emit(this.urlFire);
      return this.urlFire;
    }).catch(error =>{
      `upload Failed! ${error}`
    })

  }
}
