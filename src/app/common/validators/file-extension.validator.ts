import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 *
 * @param validExt доступные расширения файлов
 */
export function fileExtensionValidator(validExt: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!(control.value !== null && control.value !== '' && control.value !== undefined)){
      return null;
    }
    let forbidden = true;
    if (control.value) {
      const fileExt = control.value.split('.').pop();
      validExt.split(',').forEach(ext => {
        if (ext.trim() == fileExt) {
          forbidden = false;
        }
      });
    }
    return forbidden ? { 'inValidExt': true } : null;
  };
}

