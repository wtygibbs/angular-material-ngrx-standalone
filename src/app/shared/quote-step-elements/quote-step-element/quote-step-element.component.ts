import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuoteStepElementService } from './quote-step-element.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { mapFieldConfigs } from '../../utils/field-config-mapper';

@Component({
  selector: 'grid-quote-step-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-step-element.component.html',
  styleUrls: ['./quote-step-element.component.scss']
})
export class QuoteStepElementComponent implements OnInit {
  @Input() formFields: any; // Input for formFields from child components
  @Input() form: any;
  @Input() settings: any;
  @Output() formChange = new EventEmitter<FormGroup>(); // Output to emit the form


  constructor(protected fb: FormBuilder,
    protected quoteStepElementService: QuoteStepElementService) {

  }

  ngOnInit(): void {
        // Create and initialize the insuredDetails form group
        console.log(this.formFields)
        const fieldsConfig = mapFieldConfigs(this.formFields);

        this.form = this.fb.group(fieldsConfig);

        // Emit the form for use by the parent component
        this.formChange.emit(this.form);
  }

}
