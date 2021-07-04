import { AbstractControl, ValidationErrors } from '@angular/forms';

export function tableDataVerifyValidator(control: AbstractControl): ValidationErrors | null {
  try {
    const data = JSON.parse(control.value);
    if (!Array.isArray(data)) {
      return {invalidFormatData: true}
    }
    return {}
  } catch (e) {
    return {invalidJson: true}
  }
}
