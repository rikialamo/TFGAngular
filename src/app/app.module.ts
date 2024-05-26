import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UsuarioHomeComponent } from './usuario-home/usuario-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [  
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginUserComponent,
    LoginAdminComponent,
    UsuarioHomeComponent,
    AdminHomeComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
