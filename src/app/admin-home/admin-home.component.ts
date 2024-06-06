import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Usuario {
  id?: number;
  nombre: string;
  correo: string;
  contrasena: string;
}

interface DateDTO {
  mes: number;
  diaInicio: number;
  diaFin: number;
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
  users: Usuario[] = [];
  admins: Usuario[] = [];
  dateDTO: DateDTO = { mes: 0, diaInicio: 0, diaFin: 0 };
  usuariosSinFichar: Usuario[] = [];

  constructor(private http: HttpClient) { }

  crearUsuario() {
    if (this.usuario.nombre && this.usuario.correo && this.usuario.contrasena) {
      this.http.post('https://gestionhorario-api.azurewebsites.net/api/admin/usuario', this.usuario).subscribe(
        response => {
          this.message = 'Usuario creado exitosamente';
          this.obtenerUsuarios();
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
      this.http.put('https://gestionhorario-api.azurewebsites.net/api/admin/actualizarUsuario', this.usuario).subscribe(
        response => {
          this.message = 'Usuario actualizado exitosamente';
          this.obtenerUsuarios();
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
      this.http.request('delete', 'https://gestionhorario-api.azurewebsites.net/api/admin/eliminarUsuario', { body }).subscribe(
        response => {
          this.message = 'Usuario eliminado exitosamente';
          this.obtenerUsuarios();
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
    this.http.get<Usuario[]>('https://gestionhorario-api.azurewebsites.net/api/admin/usuarios').subscribe(
      response => {
        this.usuarios = response;
      },
      error => {
        this.message = 'Error al obtener usuarios';
      }
    );
  }

  listarUsers() {
    this.http.get<Usuario[]>('https://gestionhorario-api.azurewebsites.net/api/admin/users').subscribe(
      response => {
        this.users = response;
      },
      error => {
        this.message = 'Error al obtener usuarios tipo USER';
      }
    );
  }

  listarAdmins() {
    this.http.get<Usuario[]>('https://gestionhorario-api.azurewebsites.net/api/admin/admins').subscribe(
      response => {
        this.admins = response;
      },
      error => {
        this.message = 'Error al obtener usuarios tipo ADMIN';
      }
    );
  }

  getUsuariosSinFichar() {
    this.http.post<Usuario[]>('https://gestionhorario-api.azurewebsites.net/api/admin/sin-fichaje-semana-anterior', this.dateDTO).subscribe(
      response => {
        this.usuariosSinFichar = response;
      },
      error => {
        this.message = 'Error al obtener usuarios sin fichar';
      }
    );
  }
}
