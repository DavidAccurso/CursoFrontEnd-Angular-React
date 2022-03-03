export class Pelicula {
    
    public title: string;
    public image: string;
    public year: number;

    constructor(title: string, image: string, year: number) {
        this.title = title;
        this.image = image;
        this.year = year;
    }
}