import { FormGroup } from "@angular/forms";

/**
 *
 * @param fields
 * поля, среди которых нужно получить данные
 * но не более, чем с одного поля
 */
export function oneRequiredValidator(fields: string[]) {
  return function (group: FormGroup) {

    const filledControls = fields.filter((controlName) => {
      const control = group.controls[controlName];
      return control.value !== null && control.value !== '' && control.value !== undefined;

    });
    if (filledControls.length === 1) {
      return null
    }
    return {mustBeOnRequired: true}
  }
}
