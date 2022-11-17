export class SignUpForm {
  name : String;
  username :String;
  email: String;
  password : String;
  roles : String[];


  constructor(name: String, username: String, email: String, password: String,) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ["admin"];
  }

}
