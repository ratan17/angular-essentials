import { Component, computed, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input({required: true}) userName!: string;
  // @Input({required: true}) userImg!: string;

  //using input signals
  userNameInputSignal = input.required<string>();
  userImgInputSignal = input.required<string>();

  userPicPathSignal = computed(() => {
    return '../assets/users/' + this.userImgInputSignal();
  });

  constructor() {
    // You can perform any initialization logic here if needed
  }

  ngOnInit() {
    // This lifecycle hook is called after the component is initialized
    // console.log('UserComponent initialized with users:', this.selectedUser);
  }

  // get userPicpath() {
  //   return '../assets/users/' + this.userImg;
  // }

  randomUser() {
    // this.selectedUser = Math.floor(Math.random() * this.users.length);
    // this.userName = this.users[this.selectedUser].name;
    // this.userPicPath = '../../assets/users/' + this.users[this.selectedUser].avatar;
  }
}
