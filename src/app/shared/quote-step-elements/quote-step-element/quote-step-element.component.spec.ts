import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteStepElementComponent } from './quote-step-element.component';

describe('QuoteStepElementComponent', () => {
  let component: QuoteStepElementComponent;
  let fixture: ComponentFixture<QuoteStepElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuoteStepElementComponent]
    });
    fixture = TestBed.createComponent(QuoteStepElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
