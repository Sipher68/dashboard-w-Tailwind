import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSpinComponent } from './change-spin.component';

describe('ChangeSpinComponent', () => {
  let component: ChangeSpinComponent;
  let fixture: ComponentFixture<ChangeSpinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeSpinComponent]
    });
    fixture = TestBed.createComponent(ChangeSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
