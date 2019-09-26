import { NgModuleFactory, Type } from '@angular/core';

export const lazyWidgets: { path: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    path: 'lazy-comp',
    loadChildren: () => import('../modules/upload/upload.module').then(m => m.UploadModule)
  },
  {
    path: 'moduleb',
    loadChildren: () => import('../modules/moduleB/moduleb.module').then(m => m.ModBModule)
  },
  {
    path: 'tree',
    loadChildren: () => import('../modules/tree/tree.module').then(m => m.TreeModule)
  }
]

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.path] = w.loadChildren;
  }
  return result;
}