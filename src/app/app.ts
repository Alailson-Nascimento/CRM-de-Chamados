import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TabelaChamados } from './components/tabela-chamados/tabela-chamados';
import { NovoChamado } from './components/novo-chamado/novo-chamado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, TabelaChamados, NovoChamado],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'CRM de Chamados';
}
