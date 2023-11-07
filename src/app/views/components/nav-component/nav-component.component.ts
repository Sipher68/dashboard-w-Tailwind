import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss'],
  standalone: true,
})
export class NavComponentComponent {
  navItems = [
    {
      title: 'Dashboard',
      link: 'dashboard',
    },
    {
      title: 'Transport Operators',
      link: 'transport-operators',
    },
    {
      title: 'Action Center',
      link: 'action-center',
    },
    {
      title: 'PAO',
      link: 'pao',
    },
    {
      title: 'Driver',
      link: 'driver',
    },
    {
      title: 'Blacklist',
      link: 'blacklist',
    },
    {
      title: 'My Profile',
      link: 'profile',
    },
    {
      title: 'Profile',
      link: 'profile-card',
    },
  ];
}
