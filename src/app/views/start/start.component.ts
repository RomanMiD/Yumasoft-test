import { Component, OnInit } from '@angular/core';
import { StateService } from "../../services/state.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { fileExtensionValidator } from "../../common/validators/file-extension.validator";
import { tableDataVerifyValidator } from "../../common/validators/table-data-verify.validator";
import { oneRequiredValidator } from "../../common/validators/one-required.validator";
import { Router } from "@angular/router";

@Component({
  templateUrl: './start.component.html',
})


export class StartComponent implements OnInit {
  public control!: FormControl;
  public formGroup!: FormGroup;

  constructor(private stateService: StateService,
              private fb: FormBuilder,
              private router: Router) {

  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      text: [null, [tableDataVerifyValidator]],
      file: [null, [tableDataVerifyValidator]],
      filePath: [null, [fileExtensionValidator('json')]],
    }, {validators: [oneRequiredValidator(['text', 'file'])]})
  }





  onFileChange(event: any) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        try {
          const fileText = atob(reader.result!
            .toString()
            .replace('data:application/json;base64,', ''));

          this.formGroup.get('file')?.setValue(fileText);

          console.log( this.formGroup.get('file')?.setValue(fileText))

        } catch (e) {
          this.formGroup.get('file')?.setValue(null);
        }
      };
    }
  }

  onSubmit(): void {
    const parsedTextarea = JSON.parse(this.formGroup.get('text')?.value);
    const parsedFile = JSON.parse(this.formGroup.get('file')?.value);
    this.stateService.setData(parsedTextarea || parsedFile);
    this.router.navigate(['/table'])
  }


}
