import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {
celulares: Celular[] =
  [
    {id: 1, nome: "Celular A", descricao: "um celular A", esgotado: false},
    {id: 2, nome: "Celular B", esgotado: false},
    {id: 3, nome: "Celular C", descricao: "um celular C", esgotado: true},
  ]


}
