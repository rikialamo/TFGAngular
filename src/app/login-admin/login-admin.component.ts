import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf]  // Agrega FormsModule aquí
})
export class LoginAdminComponent {
  credentials = { correo: '', contrasena: '' };
  message: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.loginAdmin(this.credentials).subscribe(
      response => {
        if (response.status === 200) {
          this.message = 'Login exitoso';
          localStorage.setItem('userCredentials', JSON.stringify(this.credentials));
          this.router.navigate(['/admin/home']);
        } else {
          this.message = 'Login fallido';
        }
      },
      error => {
        this.message = 'Login fallido';
      }
    );
  }

  navigateToUser() {
    this.router.navigate(['/login/user']);
  }
}
