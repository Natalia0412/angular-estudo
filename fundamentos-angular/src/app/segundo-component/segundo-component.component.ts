import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {
  nome = "João";
  dataNascimento = "1996-01-01";
}
