import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private sncakBar: MatSnackBar
  ) { }
  notificar(mensagem:string) {
    this.sncakBar.open(mensagem, "OK", {
      duration: 2000,
      verticalPosition:  "top",
      horizontalPosition: "center"
    });
  }
}
