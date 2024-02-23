import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from '../primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from '../segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametroComponent } from '../pagina-com-parametro/pagina-com-parametro.component';

const routes: Routes =[
  {
    path: "primeira-pagina",
    component: PrimeiraPaginaComponent
  },
  {
    path: "segunda-pagina",
    component: SegundaPaginaComponent
  },
  {
    path: "",
    redirectTo: "primeira-pagina",
    pathMatch: "full"
  },
  {
    path: "pagina-com-parametro/:id",
    component: PaginaComParametroComponent
  },
  {
    path: "**",
    component: PaginaNaoEncontradaComponent
  },

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
