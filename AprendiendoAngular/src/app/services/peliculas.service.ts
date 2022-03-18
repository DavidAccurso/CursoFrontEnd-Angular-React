import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula('Spiderman 4', 'https://es.web.img3.acsta.net/c_310_420/pictures/17/06/19/14/01/130456.jpg', 2019),
            new Pelicula('Avengers', 'https://es.web.img3.acsta.net/c_310_420/pictures/18/03/16/15/33/3988420.jpg', 2011),
            new Pelicula('Shrek', 'https://es.web.img3.acsta.net/c_310_420/pictures/14/03/06/10/13/369709.jpg', 2004),
            new Pelicula('Batman', 'https://es.web.img2.acsta.net/c_310_420/pictures/22/01/27/16/40/2914301.jpg', 2022)
          ];
    }

    getPeliculas() {
        return this.peliculas;
    }
}
