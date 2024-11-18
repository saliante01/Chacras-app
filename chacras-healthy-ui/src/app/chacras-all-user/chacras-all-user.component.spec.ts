import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChacrasAllUserComponent } from './chacras-all-user.component';

describe('ChacrasAllUserComponent', () => {
  let component: ChacrasAllUserComponent;
  let fixture: ComponentFixture<ChacrasAllUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChacrasAllUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChacrasAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
