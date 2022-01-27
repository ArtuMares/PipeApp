import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  Mayus:boolean = true;
  ordenarPor:string="";

  ngOnInit(): void {
  }
  ToggleMayus(){
    this.Mayus= !this.Mayus;
  }
  cambiarOrden(valor:string){
    this.ordenarPor= valor;
  }

  
  Heroes:Heroe[]=[
    {
      nombre: "Superman",
      vuela: true,
      color:  Color.azul
    },
    {
      nombre: "Batman",
      vuela: false,
      color:  Color.negro
    },
    {
      nombre: "IronMan",
      vuela: true,
      color:  Color.rojo
    },
    {
      nombre: "Robin",
      vuela: false,
      color:  Color.rojo
    },
    {
      nombre: "Daredevil",
      vuela: false,
      color:  Color.rojo
    },
    {
      nombre: "Spider Man",
      vuela: false,
      color:  Color.rojo 
    }

  ];
}
