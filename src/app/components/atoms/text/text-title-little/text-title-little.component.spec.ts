import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTitleLittleComponent } from './text-title-little.component';

describe('TextTitleLittleComponent', () => {
  let component: TextTitleLittleComponent;
  let fixture: ComponentFixture<TextTitleLittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTitleLittleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTitleLittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
