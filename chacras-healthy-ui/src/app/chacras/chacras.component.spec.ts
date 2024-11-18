import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChacrasComponent } from './chacras.component';

describe('ChacrasComponent', () => {
  let component: ChacrasComponent;
  let fixture: ComponentFixture<ChacrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChacrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChacrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
