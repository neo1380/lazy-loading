import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { UploadComponent } from "./upload.component";

const routes: Routes = [
  { path: '', component: UploadComponent}
];

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [UploadComponent]
})
export class UploadModule { 
  static entry = UploadComponent;
}
 