import {Component, OnInit} from '@angular/core';
import {SignInForm} from '../../model/SignInForm';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide = true;
  signInForm: SignInForm;
  status = 'Please fill in the to login !';

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    );
    this.authService.signIn(this.signInForm).subscribe(data => {
      console.log('dataaa------>', data);
      if (data.token != undefined) {
        // @ts-ignore
        this.tokenService.setToken(data.token);
        // @ts-ignore
        this.tokenService.setName(data.name);
        // @ts-ignore
        this.tokenService.setAvatar(data.avatar);
        // @ts-ignore
        this.tokenService.setRole(data.roles);
        this.router.navigate(["profile"]).then(()=>{
          location.reload();
        });
      }
      // @ts-ignore
      if (data.status == 202) {
        console.log('failed');
        this.status = 'login failed! check your username or password';
      }
    });
  }
}
