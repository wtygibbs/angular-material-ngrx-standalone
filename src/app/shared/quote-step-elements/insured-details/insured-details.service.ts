import { Injectable } from '@angular/core';
import { BusinessType } from './insured-details.interface';

@Injectable({
  providedIn: 'root'
})

export class InsuredDetailsService {
  businessTypeOptions : BusinessType[] = [
    {id: 1, name: 'Individual'},
    {id: 2, name: 'Partnership'},
    {id: 3, name: 'Corporation'},
    {id: 4, name: 'Joint Venture'},
    {id: 5, name: 'Other'},
    {id: 6, name: 'LLC'}
  ];

  monthsToAddOptions: number[] = [3, 6, 9, 12];

  constructor() { }

  get getMonthsToAddOptions(): number[] {
    return this.monthsToAddOptions;
  }

  get getBusinessTypeOptions(): BusinessType[] {
    return this.businessTypeOptions;
  }
}
