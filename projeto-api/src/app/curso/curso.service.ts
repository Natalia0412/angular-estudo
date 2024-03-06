import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  url = "http://localhost:8080/curso";
  vetor:Curso[] = [];
  constructor(private http: HttpClient) { }

  obterTodosCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url);
  }

  /*cadastrarCurso(c:Curso): Observable<Curso[]>{
    return this.http.post(this.url,{cursos:c})
    .pipe(map((res)=>{
      this.vetor.push(res['cursos']);
      return this.vetor;
    }))
  }*/

  cadastrarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url, curso)
  }

  removerCurso(curso: Curso): Observable<Curso> {
    // let params = new ;
    // if (curso.idCurso !== undefined) {
    //   params = params.set("idCurso", curso.idCurso.toString());
    // }
    return this.http.delete<Curso>(this.url + '/' + curso.idCurso);
  }

  // deletarCurso(id: number ): Observable<Curso> {
  //   let params = new HttpParams();
  //   if (curso.idCurso !== undefined) {
  //     params = params.set("idCurso", curso.idCurso.toString());
  //   }
  //   return this.http.delete<Curso>(this.url, { params });
  // }

  atualizar(curso:Curso): Observable<Curso>{
     return this.http.put<Curso>(this.url + '/' +  curso.idCurso, curso)
   }
}
