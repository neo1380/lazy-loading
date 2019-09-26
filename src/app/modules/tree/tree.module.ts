import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { TreeComponent } from "../tree/tree.component";

const routes: Routes = [
  { path: '', component: TreeComponent}
];

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[TreeComponent]
})
export class TreeModule { 
  static entry = TreeComponent;
}
