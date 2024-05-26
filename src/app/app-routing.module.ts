import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UsuarioHomeComponent } from './usuario-home/usuario-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login/user', pathMatch: 'full' },
  { path: 'login/user', component: LoginUserComponent },
  { path: 'login/admin', component: LoginAdminComponent },
  { path: 'usuario/home', component: UsuarioHomeComponent },
  { path: 'admin/home', component: AdminHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
