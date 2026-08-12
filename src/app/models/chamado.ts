export type Prioridade = 'critico' | 'atencao' | 'sugestao';

export interface Chamado {
  id: number;
  nome: string;
  email: string;
  tipo: string;
  descricao: string;
  prioridade: Prioridade;
  data: string;
}
