import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "colores"
})
export class coloresPipe implements PipeTransform {

    transform(value: number): string {
        switch (value) {
            case 0:
                return "Rojo";
                break;
            case 1:
                return "Negro";
                break;
            case 2:
                return "Azul";
                break;
            case 3:
                return "Amarillo";
                break;
            default:
                return "Color indefinido";
                break;
        }
    }
}