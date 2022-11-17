import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {SignUpForm} from '../../model/SignUpForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  emailFormcontrol = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  hide = true;
  signUpForm: SignUpForm;
  status = "Please fill in the form create account !";

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
    this.authService.signUp(this.signUpForm).subscribe(data=>{
      console.log('data--------',data);
      if (data.message === "nouser"){
        this.status = "Username existed please try again !";
        return;
      }
      if (data.message === "noemail"){
        this.status = "email existed please try again !";
        return;
      }
      if(data.message === "yes"){
        this.status = "Create success !";
        return;
      }
    },error => {
      console.log('error-------',error);
      this.status = "Email invalid Please try again !";
      return;
    });
  }
}
