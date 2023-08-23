import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

interface AddressForm {
  line1: FormControl<string>;
  line2: FormControl<string | null>;
  city: FormControl<string>;
  postalCode: FormControl<string>;
  stateId: FormControl<string>;
}

export interface InsuredForm {
  name: FormControl<string>;
  dba: FormControl<string | null>;
  mailingAddress: FormGroup<AddressForm>;
}

@Component({
  selector: 'grid-insured-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  templateUrl: './insured-form.component.html',
  styleUrls: ['./insured-form.component.scss'],
})
export class InsuredFormComponent {
  insuredForm = new FormGroup<InsuredForm>({
    name: new FormControl('', { nonNullable: true }),
    dba: new FormControl('', { nonNullable: true }),
    mailingAddress: new FormGroup<AddressForm>({
      line1: new FormControl('', { nonNullable: true }),
      line2: new FormControl(''),
      city: new FormControl('', { nonNullable: true }),
      postalCode: new FormControl('', { nonNullable: true }),
      stateId: new FormControl('', { nonNullable: true }),
    }),
  });
}
