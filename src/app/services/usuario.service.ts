import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../../models/usuarios';
import {catchError} from 'rxjs/operators';
import {throws} from 'assert';
import {throwError} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/usuarios';


  obterUsuarios() {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  excluirUsuario(usuarioId: number) {
    return this.http.delete<Usuario[]>(this.baseUrl + usuarioId);
  }


  criarUsuario(usuario: Usuario) {
    console.log(usuario);
    console.log(this.baseUrl);
    return this.http.post(this.baseUrl, usuario).pipe(
      catchError(e => throwError(this.errorHandler(e)))
    );
  }
  obterUsuarioPorId(usuarioId: number) {
    return this.http.get<Usuario>(this.baseUrl + '/' + usuarioId );
  }
  atualizarUsuario(usuario: Usuario) {
    return this.http.put(this.baseUrl + '/' + usuario.id, usuario);
  }

  errorHandler(erro){
    console.log(erro);
  }
}
