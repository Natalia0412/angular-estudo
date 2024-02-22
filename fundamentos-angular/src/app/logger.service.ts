import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messagem: string[] = [];

 logar(menssagem:string){
  console.log(menssagem);
  this.messagem.push(menssagem);
 }

 exibeTodosOsLogs(){
  console.log(this.messagem);
 }
}
