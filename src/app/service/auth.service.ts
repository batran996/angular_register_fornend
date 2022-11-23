import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {SignInForm} from '../model/SignInForm';
import {JwtResponse} from '../model/JwtResponse';
import {Changeravatar} from '../model/Changeravatar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API local:
  // private API_SIGNUP = environment.API_LOCAL + 'signup';
  // private API_SIGNIN = environment.API_LOCAL + 'signin';


  //API serve:
  private API_SIGNUP = environment.API_SERVE + 'signup';
  private API_SIGNIN = environment.API_SERVE + 'signin';
  private API_UPDATE_AVATAR = environment.API_SERVE+"changer/avatar";


  constructor(private http: HttpClient) {
  }

  signUp(sigUpForm: SignUpForm): Observable<any> {
    return this.http.post(this.API_SIGNUP, sigUpForm);
  }
  signIn (signInForm: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN,signInForm);
  }
  updateAvatar(changeAvatar: Changeravatar):Observable<any>{
    return this.http.put(this.API_UPDATE_AVATAR,changeAvatar);
  }
}
