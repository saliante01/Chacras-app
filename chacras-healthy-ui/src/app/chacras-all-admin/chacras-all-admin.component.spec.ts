import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChacrasAllAdminComponent } from './chacras-all-admin.component';

describe('ChacrasAllAdminComponent', () => {
  let component: ChacrasAllAdminComponent;
  let fixture: ComponentFixture<ChacrasAllAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChacrasAllAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChacrasAllAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
