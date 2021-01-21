import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'notFound', component: CursoNaoEncontradoComponent },
  { path: ':id', component: CursoDetalheComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(cursosRoutes) ],
    exports: [RouterModule],
  declarations: []
})
export class CursosRoutingModule{ }