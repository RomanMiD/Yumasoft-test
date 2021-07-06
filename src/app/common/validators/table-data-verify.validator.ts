import { AbstractControl, ValidationErrors } from '@angular/forms';


/**
 * @function
 * Валидатор, проверяющий, значение контрола
 *
 * @param control
 *
 *
 */
export function tableDataVerifyValidator(control: AbstractControl): ValidationErrors | null {
  if (!(control.value !== null && control.value !== '' && control.value !== undefined)){
    return null
  }
  try {
    const data = JSON.parse(control.value);
    if (!Array.isArray(data)) {
      return {invalidFormatData: true}
    }
    return null;
  } catch (e) {
    return {invalidJson: true}
  }
}
