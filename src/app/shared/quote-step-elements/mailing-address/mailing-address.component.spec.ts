import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingAddressComponent } from './mailing-address.component';

describe('MailingAddressComponent', () => {
  let component: MailingAddressComponent;
  let fixture: ComponentFixture<MailingAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MailingAddressComponent]
    });
    fixture = TestBed.createComponent(MailingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
