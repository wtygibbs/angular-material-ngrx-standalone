import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { AddressComponent } from "../../components/address/address.component";
import { QuoteStepElementService } from '../quote-step-element/quote-step-element.service';
import { QuoteStepElementComponent } from '../quote-step-element/quote-step-element.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'grid-mailing-address',
    standalone: true,
    templateUrl: './mailing-address.component.html',
    styleUrls: ['./mailing-address.component.scss'],
    imports: [CommonModule, AddressComponent, QuoteStepElementComponent, MatFormFieldModule]
})
export class MailingAddressComponent extends QuoteStepElementComponent {
  constructor(protected override fb: FormBuilder,
    protected override quoteStepElementService: QuoteStepElementService) {

    super(fb,quoteStepElementService);
  }
}
