import { FormGroup } from '@angular/forms';

export abstract class UtilsForms {
  /**
   * Método que permite validar un formulario
   *
   * @param formFormGroup Formulario a validar
   *
   * @author dgutierrez
   * @version 1.0
   * @since 27/06/2023
   */
  static markFormGroupAllAsTouchedAndDirty(formFormGroup: FormGroup) {
    formFormGroup.markAllAsTouched();
    Object.keys(formFormGroup.controls).forEach((key) => {
      formFormGroup.controls[key].markAsDirty();
    });
  }
}
