import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTitleBigComponent } from './text-title-big.component';

describe('TextTitleBigComponent', () => {
  let component: TextTitleBigComponent;
  let fixture: ComponentFixture<TextTitleBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTitleBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTitleBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
