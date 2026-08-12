import { Injectable, signal, computed } from '@angular/core';
import { fakerPT_BR as faker } from '@faker-js/faker';
import { Chamado, Prioridade } from '../models/chamado';

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  public readonly chamados = signal<Chamado[]>(this.gerarChamados());

  public readonly totalCriticos = computed(() => {
    return this.chamados().filter((c) => c.prioridade === 'critico').length;
  });

  public readonly totalAtencao = computed(() => {
    return this.chamados().filter((c) => c.prioridade === 'atencao').length;
  });

  public readonly totalSugestoes = computed(() => {
    return this.chamados().filter((c) => c.prioridade === 'sugestao').length;
  });

  private gerarChamados(): Chamado[] {
    const tipos = [
      'Bug',
      'Problema na plataforma',
      'Solicitação de ferramenta',
      'Dúvida',
      'Melhoria',
    ];
    const prioridades: Prioridade[] = ['critico', 'atencao', 'sugestao'];

    const lista: Chamado[] = [];

    for (let i = 1; i <= 15; i++) {
      lista.push({
        id: i,
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        tipo: faker.helpers.arrayElement(tipos),
        descricao: faker.lorem.sentence(),
        prioridade: faker.helpers.arrayElement(prioridades),
        data: faker.date.recent({ days: 30 }).toLocaleDateString('pt-BR'),
      });
    }

    return lista;
  }

  // Adicionar novo chamado
  adicionarChamado(chamado: Chamado): void {
    this.chamados.update((lista) => [...lista, chamado]);
  }

  // Remover chamado
  removerChamado(id: number): void {
    this.chamados.update((lista) => lista.filter((c) => c.id !== id));
  }
}
