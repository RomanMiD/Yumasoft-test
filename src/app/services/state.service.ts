import { Injectable } from '@angular/core';
import { InputDataItem } from "../common/interfaces/input-data-item.interface";
import {cloneDeep} from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public formData!: InputDataItem[];

  isEmpty(): boolean {
    return !this.formData;
  }

  setData(value: any) {
    //  lodash cloneDeep для избежания мутации входных данных
    this.formData = cloneDeep(value)
  }

  getData() {
    return this.formData;
  }
}
