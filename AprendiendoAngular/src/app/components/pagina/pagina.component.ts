import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public title: string = 'Pagina';
  public nombre: string = '';
  public apellidos: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.apellidos = params['apellidos'];
    });
  }

  redireccion(){
    alert('omg redireccion hii');
    this._router.navigate(['/formulario']);
  }

}
