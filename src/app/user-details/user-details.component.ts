import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="user" class="p-4 border border-gray-300 rounded-lg shadow-md">
      <h3 class="text-lg font-semibold mb-2">User Details</h3>
      <p class="mb-1"><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class UserDetailsComponent {
  @Input() user: User | null = null;
}
