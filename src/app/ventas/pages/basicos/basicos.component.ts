import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  constructor() { }
  nombreLower:string="arturo";  
  nombreUpper:string="ARTURO";  
  nombreCompleto:string="ArtUrO MaReS";

  fecha:Date= new Date();
}
