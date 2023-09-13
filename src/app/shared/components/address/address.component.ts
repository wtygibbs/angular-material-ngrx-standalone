import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'grid-address',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})

export class AddressComponent {
  @Input() addressForm: FormGroup; // Input for parent form group
  @Output() formChange = new EventEmitter<FormGroup>(); // Output to emit the form

  constructor(private fb: FormBuilder) {
    // Create and initialize the address form group
    this.addressForm = this.fb.group({
      street1: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });

    // Emit the form for use by the parent component
    this.formChange.emit(this.addressForm);
  }
}

