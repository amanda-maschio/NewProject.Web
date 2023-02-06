import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompanyComponent } from './login/login.component';
import { HomeCompanyComponent } from './home/home.component';

const routes: Routes = [
    { path: 'login', component: LoginCompanyComponent },
    { path: 'home', component: HomeCompanyComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule { }
