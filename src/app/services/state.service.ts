import { Injectable } from '@angular/core';
import { InputDataItem } from "../common/interfaces/input-data-item.interface";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private formData!: InputDataItem[];

  isEmpty(): boolean {
    return !this.formData;
  }

  setData(value: any) {
    // lodash cloneDeep для избежания мутации входных данных
    this.formData = [...value];
  }

  getData() {
    return this.formData;
  }
}
