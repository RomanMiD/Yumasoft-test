import { Component, OnInit } from '@angular/core';
import { StateService } from "../../services/state.service";
import { InputDataItem } from "../../common/interfaces/input-data-item.interface";


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {
  data!: InputDataItem[] ;
  labels: string[] = [];
  currentEditableElement: InputDataItem | null = null;

  constructor(private stateService: StateService) {

  }

  ngOnInit(): void {
    this.data = this.stateService.getData();
    console.log(this.data)
    this.labels = [...new Set(this.data
      .map((obj) => {
        return Object.keys(obj)
      })
      .flat(1))];

    this.data = this.stateService.getData() as InputDataItem[];
  }

  onClickDelete(i: number): void {
    this.data.splice(i, 1)
    this.currentEditableElement = null;
    //array.splice(index, 1)
  }

  onClickEdit(element: InputDataItem): void {
    this.currentEditableElement = element;
  }

  onSubmit(): void {
    // this.stateService.formData = this.data
  }

}
