import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ChamadoService } from '../../services/chamado';
import { Chamado, Prioridade } from '../../models/chamado';

@Component({
  selector: 'app-novo-chamado',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './novo-chamado.html',
  styleUrl: './novo-chamado.scss',
})
export class NovoChamado {
  protected service = inject(ChamadoService);

  protected nome = '';
  protected email = '';
  protected tipo = '';
  protected descricao = '';
  protected prioridade: Prioridade = 'sugestao';

  protected tipos: string[] = [
    'Bug',
    'Problema na plataforma',
    'Solicitação de ferramenta',
    'Dúvida',
    'Melhoria',
  ];

  protected prioridades: Prioridade[] = ['critico', 'atencao', 'sugestao'];

  protected salvar(): void {
    const novo: Chamado = {
      id: Date.now(),
      nome: this.nome,
      email: this.email,
      tipo: this.tipo,
      descricao: this.descricao,
      prioridade: this.prioridade,
      data: new Date().toLocaleDateString('pt-BR'),
    };

    this.service.adicionarChamado(novo);

    this.nome = '';
    this.email = '';
    this.tipo = '';
    this.descricao = '';
    this.prioridade = 'sugestao';
  }
}
