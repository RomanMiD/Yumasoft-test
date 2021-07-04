import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./views/start/start.component";
import { TableFormComponent } from "./views/table-form/table-form.component";
import { UploadComponent } from "./views/upload/upload.component";
import { StateDataGuard } from "./guards/state-data.guard";

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'table', component: TableFormComponent, canActivate: [StateDataGuard]},
  {path: 'upload', component: UploadComponent, canActivate: [StateDataGuard]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
