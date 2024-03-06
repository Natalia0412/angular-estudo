import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  vetor: Curso[] = [];

  curso = new Curso('',0);

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.selecao();
  }

  cadastro():void{
    this.cursoService.cadastrarCurso(this.curso).subscribe(
      (res:Curso) => {
        this.curso = res;
        this.curso.nomeCurso='';
        this.curso.valorCurso=0;
        this.selecao();
      }
    )

  }

  selecao():void{
    this.cursoService.obterTodosCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    );
  }

  alterar(){
    this.cursoService.atualizar(this.curso).subscribe(
      () => {
        this.curso.nomeCurso='';
        this.curso.valorCurso=0;
        this.selecao();
      }
    );
  }

  excluir(){
    this.cursoService.removerCurso(this.curso).subscribe(
      () => {

        this.curso.nomeCurso ='';
        this.curso.valorCurso = 0;


      }
    )
  }

  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

}
