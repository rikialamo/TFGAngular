import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-home',
  templateUrl: './usuario-home.component.html',
  styleUrls: ['./usuario-home.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class UsuarioHomeComponent implements OnInit{
  nuevaContrasena: string = '';
  message: string | null = null;
  email: string | null = null;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.email = localStorage.getItem('correo');
  }

  registrarEntrada() {
    const credentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');
    this.http.post('http://localhost:8080/api/usuario/entrada', credentials).subscribe(
      response => {
        this.message = 'Entrada registrada exitosamente';
      },
      error => {
        this.message = 'Error al registrar entrada';
      }
    );
  }

  registrarSalida() {
    const credentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');
    this.http.post('http://localhost:8080/api/usuario/salida', credentials).subscribe(
      response => {
        this.message = 'Salida registrada exitosamente';
      },
      error => {
        this.message = 'Error al registrar salida';
      }
    );
  }

  actualizarContrasena() {
    if (!this.nuevaContrasena) {
      this.message = 'Por favor, ingresa una nueva contraseña';
      return;
    }
    const credentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');
    const body = { ...credentials, nuevacontrasena: this.nuevaContrasena };
    this.http.put('http://localhost:8080/api/usuario/actualizarContrasena', body).subscribe(
      response => {
        this.message = 'Contraseña actualizada exitosamente';
      },
      error => {
        this.message = 'Error al actualizar la contraseña';
      }
    );
  }
}

