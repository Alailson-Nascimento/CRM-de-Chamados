import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChamadoService } from '../../services/chamado';

@Component({
  selector: 'app-tabela-chamados',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './tabela-chamados.html',
  styleUrl: './tabela-chamados.scss',
})
export class TabelaChamados {
  protected service = inject(ChamadoService);

  protected colunas: string[] = [
    'id',
    'nome',
    'email',
    'tipo',
    'descricao',
    'prioridade',
    'data',
    'acoes',
  ];

  protected getClassePrioridade(prioridade: string): string {
    return 'prioridade-' + prioridade;
  }
}
