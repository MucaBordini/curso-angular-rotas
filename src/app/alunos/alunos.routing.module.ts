import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoNaoEncontradoComponent } from './aluno-nao-encontrado/aluno-nao-encontrado.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';


const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent, children: [
    { path: 'novo', component: AlunoFormComponent},
    { path: ':id', component: AlunoDetalheComponent,
      resolve: { aluno : AlunoDetalheResolver}
    },
    { path: ':id/edit', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard]},
    { path: 'notFound', component: AlunoNaoEncontradoComponent },
  ]},
];

@NgModule({
    imports: [ RouterModule.forChild(alunosRoutes) ],
    exports: [RouterModule],
  declarations: []
})
export class AlunosRoutingModule{ }