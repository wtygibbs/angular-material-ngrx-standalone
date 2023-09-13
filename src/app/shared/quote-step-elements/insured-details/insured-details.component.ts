import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InsuredDetailsService } from './insured-details.service';
import { BusinessType } from './insured-details.interface';
import { QuoteStepElementComponent } from '../quote-step-element/quote-step-element.component';
import { QuoteStepElementService } from '../quote-step-element/quote-step-element.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'grid-insured-details',
    standalone: true,
    templateUrl: './insured-details.component.html',
    styleUrls: ['./insured-details.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, QuoteStepElementComponent]
})

export class InsuredDetailsComponent extends QuoteStepElementComponent {
  constructor(protected override fb: FormBuilder,
    protected override quoteStepElementService: QuoteStepElementService,
    private insuredDetailsService: InsuredDetailsService) {

    super(fb,quoteStepElementService);
  }

  get businessTypeOptions(): BusinessType[] {
    return this.insuredDetailsService.businessTypeOptions;
  }

  get monthsToAddOptions(): number[] {
    return this.insuredDetailsService.getMonthsToAddOptions;
  }
}
