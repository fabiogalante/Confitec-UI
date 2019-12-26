import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../services/usuario.service';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html'
})
export class AdicionarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  title: string = "Criar";
  id: number;
  errorMessage: any;
  usuariosList: Array<any> = [];

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
              private usuarioService: UsuarioService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }

    this.usuarioForm = this._fb.group({
      id: 0,
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      escolaridade:  ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }


  save() {

    if (!this.usuarioForm.valid) {
      return;
    }

    if (this.title === "Criar") {
      console.log(this.title);
      this.usuarioService.criarUsuario(this.usuarioForm.value)
        .subscribe((data) => {
          this._router.navigate(['/usuario']);
        }, error => this.errorMessage = error);
    }
    else if (this.title === "Edit") {
      this.usuarioService.atualizarUsuario(this.usuarioForm.value)
        .subscribe((data) => {
          this._router.navigate(['/usuario']);
        }, error => this.errorMessage = error);
    }
  }

  cancel() {
    this._router.navigate(['/usuario']);
  }

  get nome() { return this.usuarioForm.get('nome'); }
  get sobrenome() { return this.usuarioForm.get('sobrenome'); }
  get email() { return this.usuarioForm.get('email'); }
  get dataNascimento() { return this.usuarioForm.get('dataNascimento'); }
  get escolaridade() { return this.usuarioForm.get('escolaridade'); }

}
