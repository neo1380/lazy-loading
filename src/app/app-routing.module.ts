import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";


export const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'home',component: HomeComponent },
  { path: 'upload', loadChildren: () => import('./modules/upload/upload.module').then(m => m.UploadModule) },
  { path: 'modb', loadChildren: () => import('./modules/moduleB/moduleb.module').then(m => m.ModBModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
