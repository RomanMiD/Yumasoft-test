import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StartComponent } from './views/start/start.component';
import { TableFormComponent } from './views/table-form/table-form.component';
import { AppRoutingModule } from "./app-routing.module";
import { UploadComponent } from './views/upload/upload.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TableFormComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
