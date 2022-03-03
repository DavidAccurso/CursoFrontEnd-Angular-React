import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public title: string;
  public peliculas: Array<any>;

  constructor() { 

    this.title = 'Peliculas';

    this.peliculas = [
      {year: 2019, title: 'Spiderman 4', image: 'https://es.web.img3.acsta.net/c_310_420/pictures/17/06/19/14/01/130456.jpg'},
      {year: 2011, title: 'Avengers', image: 'https://es.web.img3.acsta.net/c_310_420/pictures/18/03/16/15/33/3988420.jpg'},
      {year: 2004, title: 'Shrek', image: 'https://es.web.img3.acsta.net/c_310_420/pictures/14/03/06/10/13/369709.jpg'},
      {year: 2022, title: 'Batman', image: 'https://es.web.img2.acsta.net/c_310_420/pictures/22/01/27/16/40/2914301.jpg'}
    ];

  }

  ngOnInit(): void {
  }

}
