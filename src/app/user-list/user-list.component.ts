import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  template: `
    <ul class="list-none p-0">
      <li
        *ngFor="let user of users"
        (click)="selectUser(user)"
        (keydown.enter)="selectUser(user)"
        (keydown.space)="selectUser(user)"
        tabindex="0"
        class="mb-2 p-2 cursor-pointer bg-blue-100 hover:bg-blue-200 rounded transition-colors"
      >
        {{ user.name }} ({{ user.age }})
      </li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  selectUser(user: User) {
    this.userSelected.emit(user);
  }
}
