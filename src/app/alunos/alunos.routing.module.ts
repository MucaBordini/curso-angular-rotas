import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoNaoEncontradoComponent } from './aluno-nao-encontrado/aluno-nao-encontrado.component';
import { AlunosComponent } from './alunos.component';


const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent, children: [
    { path: 'novo', component: AlunoFormComponent},
    { path: ':id', component: AlunoDetalheComponent},
    { path: ':id/edit', component: AlunoFormComponent},
    { path: 'notFound', component: AlunoNaoEncontradoComponent },
  ]},
];

@NgModule({
    imports: [ RouterModule.forChild(alunosRoutes) ],
    exports: [RouterModule],
  declarations: []
})
export class AlunosRoutingModule{ }