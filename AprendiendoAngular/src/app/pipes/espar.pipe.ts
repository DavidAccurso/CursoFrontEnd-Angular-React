import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})
export class EsParPîpe implements PipeTransform {

    transform(value: Date) {

        let esPar = "es IMPAR";
        if(value.getFullYear() % 2 == 0) {
            esPar = "es PAR";
        }

        return "El año es: " + value.getFullYear() + " y " + esPar;
    }
}