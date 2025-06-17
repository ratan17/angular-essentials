import { Component,signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser = Math.floor(Math.random() * DUMMY_USERS.length);
  users = DUMMY_USERS;
  userPicPath = '../../assets/users/' + this.users[this.selectedUser].avatar;
  userName = this.users[this.selectedUser].name;

  //signal
  userPicPathSignal = computed( () => '../../assets/users/' + this.users[this.selectedUser].avatar );
  userNameSignal = signal(DUMMY_USERS[this.selectedUser].name);

  constructor() {
    // You can perform any initialization logic here if needed
  }

  ngOnInit() {
    // This lifecycle hook is called after the component is initialized
    console.log('UserComponent initialized with users:', this.selectedUser);
  }

  // get userPicPath(){
  //   return '../../assets/users/' + this.users[this.selectedUser].avatar
  // }

  // get userName(){
  //   return this.users[this.selectedUser].name;
  // }

  randomUser(){
  this.selectedUser = Math.floor(Math.random() * this.users.length);
  this.userName = this.users[this.selectedUser].name;
  this.userPicPath = '../../assets/users/' + this.users[this.selectedUser].avatar; 

  //signal code
  this.userNameSignal.set(this.userName);
  this.userPicPathSignal = computed(()=>'../../assets/users/' + this.users[this.selectedUser].avatar);
     
  }
}
