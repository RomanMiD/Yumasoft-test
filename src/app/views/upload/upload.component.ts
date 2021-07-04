import { Component, OnInit } from '@angular/core';
import { InputDataItem } from "../../common/interfaces/input-data-item.interface";
import { StateService } from "../../services/state.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
 data!: InputDataItem[];
  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.data = this.stateService.getData()
  }

}
