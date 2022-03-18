import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo!: string;

  constructor() { 
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user)
  }

  darClick() {
    console.log("diste click");
  }

  salidoBlur() {
    console.log("saliudo del bluir");
  }

  pulsado(){
    console.log("Pulsaste enter");
  }

}
