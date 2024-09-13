import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserListComponent, UserDetailsComponent],
})
export class AppComponent implements OnInit {
  title = 'linting-formatting-practice';
  selectedUser: User | null = null;

  constructor() {
    console.log('App component initialized');
  }

  ngOnInit() {
    const x = 10;
    if (x === 10) {
      console.log('x is 10');
    }
  }

  onUserSelected(user: User) {
    this.selectedUser = user;
  }
}
