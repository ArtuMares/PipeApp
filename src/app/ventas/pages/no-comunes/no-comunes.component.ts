import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Arturo";
  genero: string = "Masculino";
  invitacionMap = {
    "Masculino": "invitarlo",
    "Femenino": "invitarla",
  };
  //i18nPlural
  clientes: string[] = ["Maria", "Rodolfo", "Juan"];
  clientesMap = {
    "=0": "no tenemos ningun cliente esperando",
    "=1": "tenemos un cliente esperando",
    "=2": "tenemos 2 clientes esperando",
    "other": "tenemos # clientes esperando"
  }

  cambiarCliente() {

    if (this.genero === "Masculino") {
      this.nombre = "Susana";
      this.genero = "Femenino"
    } else {
      this.nombre = "Arturo";
      this.genero = "Masculino"
    }
  }
  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValuePipe
  persona = {
    nombre: "Arturo",
    edad: "21",
    direcion: "Zapopan, Jalisco"
  };

  //Json Pipe
  heroes = [{
    nombre: "Superman",
    vuela: true
  }, {
    nombre: "Batman",
    vuela: false
  }, {
    nombre: "Aquaman",
    vuela: false
  }
  ];
//Async Pipe

  miObservable =interval(5000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Tenemos data de promesa")
    },3500);

  });
}