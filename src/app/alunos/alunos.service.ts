import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'Joao', email: 'joao@mail.com' },
    { id: 2, nome: 'Pedro', email: 'pedro@mail.com' },
    { id: 3, nome: 'Maria', email: 'maria@mail.com' }
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    let alunos = this.getAlunos();
    for(let i = 0; i < alunos.length; i++){
      let aluno = alunos[i];
        if (aluno.id == id){
          return aluno;
        }
    }
    return null;
  }

  constructor() { }
}
