import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictsComponent } from './predicts.component';

describe('PredictsComponent', () => {
  let component: PredictsComponent;
  let fixture: ComponentFixture<PredictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
