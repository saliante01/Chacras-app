import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChacraUserComponent } from './details-chacra-user.component';

describe('DetailsChacraUserComponent', () => {
  let component: DetailsChacraUserComponent;
  let fixture: ComponentFixture<DetailsChacraUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsChacraUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsChacraUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
