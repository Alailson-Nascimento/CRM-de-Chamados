import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaChamados } from './tabela-chamados';

describe('TabelaChamados', () => {
  let component: TabelaChamados;
  let fixture: ComponentFixture<TabelaChamados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaChamados],
    }).compileComponents();

    fixture = TestBed.createComponent(TabelaChamados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
