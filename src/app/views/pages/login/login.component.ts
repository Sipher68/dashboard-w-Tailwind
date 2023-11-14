import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule],
})
export class LoginComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faKey = faKey;
}
