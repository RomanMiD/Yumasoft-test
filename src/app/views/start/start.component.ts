import { Component } from '@angular/core';
import { StateService } from "../../services/state.service";

import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { tableDataVerifyValidator } from "../../common/validators/table-data-verify.validator";

@Component({
  templateUrl: './start.component.html',
})
export class StartComponent {
  public control!: FormControl;

  constructor(private stateService: StateService,
              private fb: FormBuilder) {

    this.control = this.fb.control(null, {validators: [Validators.required, tableDataVerifyValidator]})
  }


  save(val: any) {
    const parsedValue = JSON.parse(val)
    this.stateService.setData(parsedValue);
  }
}
