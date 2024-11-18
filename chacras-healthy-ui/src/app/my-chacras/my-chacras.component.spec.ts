import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChacrasComponent } from './my-chacras.component';

describe('MyChacrasComponent', () => {
  let component: MyChacrasComponent;
  let fixture: ComponentFixture<MyChacrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyChacrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyChacrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
