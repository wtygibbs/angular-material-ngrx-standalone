import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteStepElementService {
  constructor() { }

  updateFormFields(formFields: any, fields: any[]): any {
    // Clone the original formFields object to avoid modifying it directly
    const updatedFormFields = { ...formFields };

    // Iterate through the 'fields' array and apply updates to 'updatedFormFields'
    for (const fieldUpdate of fields) {
      const fieldName = fieldUpdate.fieldName;

      // Check if the field exists in 'updatedFormFields'
      if (updatedFormFields.hasOwnProperty(fieldName)) {
        if (fieldUpdate.enabled === false) {
          // If 'enabled' is set to false, remove the field
          delete updatedFormFields[fieldName];
        } else {
          // If 'enabled' is not explicitly set to false, update the field
          // updatedFormFields[fieldName][0] = fieldUpdate.value || '';
          // You can add more properties to update here if needed
        }
      }
    }

    return updatedFormFields;
  }
}
