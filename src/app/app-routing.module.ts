import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExampleComponent } from './pages/example/example.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './pages/error/internal-server-error/internal-server-error.component';
import { UnauthorizedComponent } from './pages/error/unauthorized/unauthorized.component';
import { ConectionErrorComponent } from './pages/error/conection-error/conection-error.component';
import { LoginConsumerComponent } from './pages/consumer/login/login.component';
import { LoginCompanyComponent } from './pages/company/login/login.component';
import { HomeConsumerComponent } from './pages/consumer/home/home.component';
import { HomeCompanyComponent } from './pages/company/home/home.component';

const routes: Routes = [
  { path: 'consumer/login', component: LoginConsumerComponent },
  { path: 'company/login', component: LoginCompanyComponent },

  { path: 'home', component: HomeComponent },
  { path: 'consumer/home', component: HomeConsumerComponent },
  { path: 'company/home', component: HomeCompanyComponent },

  { path: 'example', component: ExampleComponent },
  { path: 'not-found-404', component: NotFoundComponent },
  { path: 'internal-server-error-500', component: InternalServerErrorComponent },
  { path: 'unauthorized-error-401', component: UnauthorizedComponent },
  { path: 'conection-error', component: ConectionErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
