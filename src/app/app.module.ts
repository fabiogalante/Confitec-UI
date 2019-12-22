import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsuarioComponent } from './usuarios/list-usuario.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {UsuarioService} from './services/usuario.service';
import {RouterModule} from '@angular/router';
import { AdicionarUsuarioComponent } from './usuarios/adicionar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsuarioComponent,
    AdicionarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'usuario', component: ListUsuarioComponent},
      { path: 'incluir', component: AdicionarUsuarioComponent},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
