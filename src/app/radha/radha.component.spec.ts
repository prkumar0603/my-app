import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadhaComponent } from './radha.component';

describe('RadhaComponent', () => {
  let component: RadhaComponent;
  let fixture: ComponentFixture<RadhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
