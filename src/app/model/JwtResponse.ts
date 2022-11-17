export class JwtResponse {
  token: String;
  name: String;
  avatar:String;
  roles: any[];

  constructor(token: String, name: String, avatar: String, roles: any[]) {
    this.token = token;
    this.name = name;
    this.avatar = avatar;
    this.roles = roles;
  }
}
