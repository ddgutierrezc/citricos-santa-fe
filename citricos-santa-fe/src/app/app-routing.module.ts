import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URLPagesEnum } from './common/enums/url-pages.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: URLPagesEnum.HOME,
    pathMatch: 'full',
  },
  {
    path: URLPagesEnum.HOME,
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
