import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayProcessingComponent } from './two-way-processing.component';

describe('TwoWayProcessingComponent', () => {
  let component: TwoWayProcessingComponent;
  let fixture: ComponentFixture<TwoWayProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
