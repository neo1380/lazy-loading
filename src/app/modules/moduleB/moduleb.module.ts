import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ModuleBComponent } from "./moduleb.component";

const routes: Routes = [
  { path: '', component: ModuleBComponent}
];

@NgModule({
  declarations: [ModuleBComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[ModuleBComponent]
})
export class ModBModule{
  static entry =ModuleBComponent;
 }
