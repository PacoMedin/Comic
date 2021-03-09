import { Component, OnInit, Input } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
   @Input() heroes:any [] = [];
   termino:string;

  constructor( private _heroesService:HeroesService,
               private activatedRoute:ActivatedRoute,
               ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe (params=>{
      this.termino = params["termino"];
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
     
    });
  }

}
