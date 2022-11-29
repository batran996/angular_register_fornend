import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 checkAdmin = false;
  constructor(private router: Router,
              private tokenservice: TokenService) { }

  ngOnInit(): void {
    console.log('roleeeee--->',this.tokenservice.getRole());
    if (JSON.stringify(this.tokenservice.getRole())==JSON.stringify(["ADMIN"])){
    this.checkAdmin = true;
    }

  }
logOut(){
  console.log("loggggouuuuuttt");
    localStorage.clear();
    this.router.navigate([""]).then(()=>{
      location.reload();
    })
}
}
