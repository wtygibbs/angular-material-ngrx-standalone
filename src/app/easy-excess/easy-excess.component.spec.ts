import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyExcessComponent } from './easy-excess.component';

describe('EasyExcessComponent', () => {
  let component: EasyExcessComponent;
  let fixture: ComponentFixture<EasyExcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EasyExcessComponent],
    });
    fixture = TestBed.createComponent(EasyExcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
