import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf]  // Agrega FormsModule aquí
})
export class LoginUserComponent {
  credentials = { correo: '', contrasena: '' };
  message: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.loginUser(this.credentials).subscribe(
      response => {
        if (response.status === 200) {
          this.message = 'Login exitoso';
          localStorage.setItem('userCredentials', JSON.stringify(this.credentials));
          this.router.navigate(['/usuario/home']);
        } else {
          this.message = 'Login fallido';
        }
      },
      error => {
        this.message = 'Login fallido';
      }
    );
  }

  navigateToAdmin() {
    this.router.navigate(['/login/admin']);
  }
}
