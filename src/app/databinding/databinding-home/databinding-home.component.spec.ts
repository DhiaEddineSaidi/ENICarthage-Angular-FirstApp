import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingHomeComponent } from './databinding-home.component';

describe('DatabindingHomeComponent', () => {
  let component: DatabindingHomeComponent;
  let fixture: ComponentFixture<DatabindingHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabindingHomeComponent]
    });
    fixture = TestBed.createComponent(DatabindingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
