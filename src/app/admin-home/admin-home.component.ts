import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Usuario {
  nombre: string;
  correo: string;
  contrasena: string;
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AdminHomeComponent {
  usuario: Usuario = { nombre: '', correo: '', contrasena: '' };
  deleteCorreo: string = '';
  message: string | null = null;
  usuarios: Usuario[] = [];

  constructor(private http: HttpClient) { }

  crearUsuario() {
    if (this.usuario.nombre && this.usuario.correo && this.usuario.contrasena) {
      this.http.post('http://localhost:8080/api/admin/usuario', this.usuario).subscribe(
        response => {
          this.message = 'Usuario creado exitosamente';
        },
        error => {
          this.message = 'Error al crear usuario';
        }
      );
    } else {
      this.message = 'Por favor, completa todos los campos';
    }
  }

  actualizarUsuario() {
    if (this.usuario.nombre && this.usuario.correo && this.usuario.contrasena) {
      this.http.put('http://localhost:8080/api/admin/actualizarUsuario', this.usuario).subscribe(
        response => {
          this.message = 'Usuario actualizado exitosamente';
        },
        error => {
          this.message = 'Error al actualizar usuario';
        }
      );
    } else {
      this.message = 'Por favor, completa todos los campos';
    }
  }

  eliminarUsuario() {
    if (this.deleteCorreo) {
      const body = { correo: this.deleteCorreo, contrasena: '' };
      this.http.request('delete', 'http://localhost:8080/api/admin/eliminarUsuario', { body }).subscribe(
        response => {
          this.message = 'Usuario eliminado exitosamente';
        },
        error => {
          this.message = 'Error al eliminar usuario';
        }
      );
    } else {
      this.message = 'Por favor, ingresa un correo';
    }
  }

  obtenerUsuarios() {
    this.http.get<Usuario[]>('http://localhost:8080/api/admin/usuarios').subscribe(
      response => {
        this.usuarios = response;
      },
      error => {
        this.message = 'Error al obtener usuarios';
      }
    );
  }
}
