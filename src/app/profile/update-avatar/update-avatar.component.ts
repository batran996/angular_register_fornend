import { Component, OnInit } from '@angular/core';
import {Changeravatar} from '../../model/Changeravatar';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../dialog/dialog/dialog.component';

@Component({
  selector: 'app-update-avatar',
  templateUrl: './update-avatar.component.html',
  styleUrls: ['./update-avatar.component.scss']
})
export class UpdateAvatarComponent implements OnInit {
singerAvatar: Changeravatar;
checkUpload = false;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changerAvatar($event: string) {
    this.singerAvatar = new Changeravatar($event);
    this.authService.updateAvatar(this.singerAvatar).subscribe(data =>{
      console.log('dataaaaadas---->',data);
      if (data.message === "yes"){
        this.checkUpload = true;
        this.tokenService.setAvatar($event);
        this.dialog.open(DialogComponent);
      }
    })
  }
}
