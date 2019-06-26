import Website from './Website';

export default class User {
  username: String;
  password: String;
  firstName: String;
  lastName:String;
  websites: Website[];
  constructor(username: String, password: String, firstName: String, lastName:String,websites:Website[]) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.websites = websites;
  }
}