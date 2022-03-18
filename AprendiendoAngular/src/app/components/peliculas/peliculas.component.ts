import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;
  public favorita!: Pelicula;
  public fecha!: Date;

  constructor(private _peliculaService: PeliculaService) { 
    this.peliculas = _peliculaService.getPeliculas();
    this.fecha = new Date(2015, 9, 21);
  }

  ngOnInit(): void {
  }

  mostrarFavorita(event: any){
    console.log(event);
    this.favorita = event.pelicula;
  }
}
