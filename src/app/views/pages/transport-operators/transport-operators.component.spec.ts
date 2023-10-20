import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOperatorsComponent } from './transport-operators.component';

describe('TransportOperatorsComponent', () => {
  let component: TransportOperatorsComponent;
  let fixture: ComponentFixture<TransportOperatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportOperatorsComponent]
    });
    fixture = TestBed.createComponent(TransportOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
