import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {error} from 'protractor';

@Component({
  selector: 'app-miltiple-avatar',
  templateUrl: './miltiple-avatar.component.html',
  styleUrls: ['./miltiple-avatar.component.scss']
})
export class MiltipleAvatarComponent implements OnInit {
  selectFile : File[];
  arrFilesinFireBase: AngularFireStorageReference;
  arrUrlFormFilreBase = [];
  check = false;
  @Output()
  arrUrl = new EventEmitter<String[]>();


  constructor(private afServicee: AngularFireStorage) { }

  ngOnInit(): void {
  }

  uploadMultipleFile($even){
    console.log('evennnnn-->',$even);
    this.selectFile = $even.target.files;
  }
  upload(){
    for (let i = 0; i < this.selectFile.length; i++) {
      this.arrFilesinFireBase = this.afServicee.ref(this.selectFile[i].name);
      this.arrFilesinFireBase.put(this.selectFile).then(data =>{
        return data.ref.getDownloadURL();
      }).then(url=>{
        this.arrUrlFormFilreBase.push(url);
        this.arrUrl.emit(this.arrUrlFormFilreBase);
      }).catch(error =>{
        console.log(`upload lailed! ${error}` );
      })
    }
  }


}
