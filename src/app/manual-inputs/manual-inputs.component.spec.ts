import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualInputsComponent } from './manual-inputs.component';

describe('ManualInputsComponent', () => {
  let component: ManualInputsComponent;
  let fixture: ComponentFixture<ManualInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualInputsComponent]
    });
    fixture = TestBed.createComponent(ManualInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
