import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTitleMediumComponent } from './text-title-medium.component';

describe('TextTitleMediumComponent', () => {
  let component: TextTitleMediumComponent;
  let fixture: ComponentFixture<TextTitleMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTitleMediumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTitleMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
