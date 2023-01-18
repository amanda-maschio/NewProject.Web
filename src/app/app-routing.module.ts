import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExampleComponent } from './pages/example/example.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './pages/error/internal-server-error/internal-server-error.component';
import { UnauthorizedComponent } from './pages/error/unauthorized/unauthorized.component';
import { ConectionErrorComponent } from './pages/error/conection-error/conection-error.component';
import { AuthorizeGuard } from './services/authorize-guard';

const routes: Routes = [
  //canActivate: [AuthorizeGuard]: Responsável por dizer se o usuário logado vai ter acesso ou não;
  //  { path: 'home', component: HomeComponent, canActivate: [AuthorizeGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
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
