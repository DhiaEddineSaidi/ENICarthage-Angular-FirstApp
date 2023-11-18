import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToModelComponent } from './view-to-model.component';

describe('ViewToModelComponent', () => {
  let component: ViewToModelComponent;
  let fixture: ComponentFixture<ViewToModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewToModelComponent]
    });
    fixture = TestBed.createComponent(ViewToModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
