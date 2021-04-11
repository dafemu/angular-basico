import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'IronMan', 'Thor', 'Capitan America', 'Hulk'];
  heroeBorrado: string = '';

  constructor() { 
    console.log('constructor');//el constructor se ejecuta primero que el OnInit
  }

  ngOnInit(): void {
  }

  borrarHeore(){
    console.log('borrando');
    //this.heroes.pop();elimino el ultimo elemento del array
    this.heroeBorrado = this.heroes.shift();
    //this.heroeBorrado = this.heroes.shift() || '' ;

    console.log(this.heroeBorrado);

    if(this.heroeBorrado == undefined){
      this.heroeBorrado = 'No hay mes heroes a borrar';
    }
  }

}
