import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "company",
    loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: "consumer",
    loadChildren: () => import('./pages/consumer/consumer.module').then(m => m.ConsumerModule)
  },
  {
    path: "public",
    loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
