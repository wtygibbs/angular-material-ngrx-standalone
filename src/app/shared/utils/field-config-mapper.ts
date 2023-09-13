import { Validators } from '@angular/forms';

interface InputFieldConfig {
  default: string;
  required: boolean;
}

type MappedFieldConfig = { [key: string]: [string, any] };

export function mapFieldConfigs(input: { [key: string]: InputFieldConfig }): MappedFieldConfig {
  const mappedConfig: MappedFieldConfig = {};

  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      const fieldConfig = input[key];
      mappedConfig[key] = [fieldConfig.default, fieldConfig.required ? Validators.required : []];
    }
  }

  return mappedConfig;
}
