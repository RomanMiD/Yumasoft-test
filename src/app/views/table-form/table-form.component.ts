import { Component, HostListener, OnInit } from '@angular/core';
import { StateService } from "../../services/state.service";
import { InputDataItem } from "../../common/interfaces/input-data-item.interface";
import { Router } from "@angular/router";


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss'],
})
export class TableFormComponent implements OnInit {
  data!: InputDataItem[];
  labels: string[] = [];
  currentEditableElement: InputDataItem | null = null;

  constructor(private stateService: StateService, private router: Router) {
    this.onKeydownEscape();
  }

  setElementToEdit(element: InputDataItem | null): void {
    this.currentEditableElement = element;
  }


  @HostListener('keydown.escape')
  onKeydownEscape():void {
    this.currentEditableElement = null;
  }

  onDoubleClickEdit(item: InputDataItem):void {
    this.setElementToEdit(item);
  }

  ngOnInit(): void {
    this.data = this.stateService.getData();
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
  }

  onClickEdit(item: InputDataItem): void {
    this.setElementToEdit(item);

  }


  onClickAdd() :void{
    const newElement: InputDataItem = {};
    this.data.push(newElement);
    this.setElementToEdit(newElement)
  }

  onClickConfirm(): void {
    this.setElementToEdit(null);
  }

  onSubmit(): void {
    this.stateService.formData = this.data;
    this.router.navigate(['/upload'])
  }


}
