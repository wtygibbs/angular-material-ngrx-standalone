import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from '../../components/address/address.component';
import { QuoteStepElementComponent } from "../quote-step-element/quote-step-element.component";
import { FormBuilder, Validators } from '@angular/forms';
import { QuoteStepElementService } from '../quote-step-element/quote-step-element.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'grid-physical-address',
    standalone: true,
    templateUrl: './physical-address.component.html',
    styleUrls: ['./physical-address.component.scss'],
    imports: [CommonModule, AddressComponent, QuoteStepElementComponent, MatFormFieldModule]
})
export class PhysicalAddressComponent extends QuoteStepElementComponent {
  constructor(protected override fb: FormBuilder,
    protected override quoteStepElementService: QuoteStepElementService) {

    super(fb,quoteStepElementService);

  }
}
