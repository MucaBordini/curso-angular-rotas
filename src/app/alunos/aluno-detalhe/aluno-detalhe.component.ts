import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number ;
  inscricao: Subscription;
  aluno: any;

  

  constructor(private route: ActivatedRoute, private router: Router, private alunoService: AlunosService) { 
    this.id = this.route.snapshot.params['id'];
  }

  editaContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'edit'])
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno = this.alunoService.getAluno(this.id);
        if (this.aluno == null){
          this.router.navigate(['/notFound']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
