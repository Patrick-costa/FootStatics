import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasAnterioresComponent } from './partidas-anteriores.component';

describe('PartidasAnterioresComponent', () => {
  let component: PartidasAnterioresComponent;
  let fixture: ComponentFixture<PartidasAnterioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidasAnterioresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
