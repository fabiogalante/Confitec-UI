import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuarios';
import {UsuarioService} from '../services/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router, ) { }

  ngOnInit() {
    this.usuarioService.obterUsuarios()
      .subscribe((data: Usuario[]) => {
        this.usuarios = data;
      });
  }

  excluirUsuario(usuario: Usuario): void {
    this.usuarioService.excluirUsuario(usuario.id)
      .subscribe(data => {
        this.usuarios = this.usuarios.filter(u => u !== usuario);
      });
  }
  alterarUsuario(usaurio: Usuario): void {
    localStorage.removeItem('editEmpId');
    localStorage.setItem('editEmpId', usaurio.id.toString());
    this.router.navigate(['adicionar-usuario']);
  }

  novo() {
    this.router.navigate(['/incluir']);
  }

}
