import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

@Injectable({
  providedIn: 'root',
})
export class InsuredFormService {
  constructor() {}

  insuredForm(): FormGroup<InsuredForm> {
    return new FormGroup<InsuredForm>({
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
}
