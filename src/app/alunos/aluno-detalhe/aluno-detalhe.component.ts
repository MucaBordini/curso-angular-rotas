import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number ;
  inscricao: Subscription;
  aluno: Aluno;

  

  constructor(private route: ActivatedRoute, private router: Router, private alunoService: AlunosService) { 
    this.id = this.route.snapshot.params['id'];
  }

  editaContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'edit'])
  }

  ngOnInit(): void {
    
    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        this.aluno = info.aluno
      }
    );

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
