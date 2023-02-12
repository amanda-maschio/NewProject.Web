import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConectionErrorComponent } from './error/conection-error/conection-error.component';
import { InDevelopmentComponent } from './error/in-development/in-development.component';
import { InternalServerErrorComponent } from './error/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'error/not-found-404', component: NotFoundComponent },
    { path: 'error/internal-server-error-500', component: InternalServerErrorComponent },
    { path: 'error/unauthorized-error-401', component: UnauthorizedComponent },
    { path: 'error/conection-error', component: ConectionErrorComponent },
    { path: 'error/in-development', component: InDevelopmentComponent },
    { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
