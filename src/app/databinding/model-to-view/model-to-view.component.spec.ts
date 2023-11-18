import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelToViewComponent } from './model-to-view.component';

describe('ModelToViewComponent', () => {
  let component: ModelToViewComponent;
  let fixture: ComponentFixture<ModelToViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelToViewComponent]
    });
    fixture = TestBed.createComponent(ModelToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
