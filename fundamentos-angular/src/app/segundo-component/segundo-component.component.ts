import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {
  nome = "Natália";
  dataNascimento = "1996-12-04";
  urlImagem = "/assets/eu1.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento é: ${this.dataNascimento}`);
  }
}
