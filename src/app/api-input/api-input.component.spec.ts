import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInputComponent } from './api-input.component';

describe('ApiInputComponent', () => {
  let component: ApiInputComponent;
  let fixture: ComponentFixture<ApiInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiInputComponent]
    });
    fixture = TestBed.createComponent(ApiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
