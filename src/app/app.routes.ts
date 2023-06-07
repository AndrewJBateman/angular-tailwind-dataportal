import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./data-mngt/data-grid/data-grid.component').then(
        (cmp) => cmp.DataGridComponent
      ),
  },
];
