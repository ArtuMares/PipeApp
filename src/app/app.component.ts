import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private PrimeNGConfig:PrimeNGConfig){

  }

  ngOnInit(){
    this.PrimeNGConfig.ripple=true;
  }
}
