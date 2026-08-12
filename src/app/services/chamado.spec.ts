import { TestBed } from '@angular/core/testing';
import { ChamadoService } from './chamado';
import { Chamado } from '../models/chamado';

describe('ChamadoService', () => {
  let service: ChamadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve encontrar um chamado pelo id', () => {
    const id = service.chamados()[0].id;
    const encontrado = service.chamados().find((c: Chamado) => c.id === id);
    expect(encontrado).toBeTruthy();
  });
});
