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

  get clearData() {
    return this.data.filter(value => {
      return Object.keys(value).length !== 0
    })
  }

  download() {
    const filename = 'test';
    const pom = document.createElement('a');
    const prettyJson = JSON.stringify(this.clearData, null, 2);
    pom.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(prettyJson));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
      const event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }


}
