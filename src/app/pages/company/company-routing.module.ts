import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompanyComponent } from './login/login.component';
import { HomeCompanyComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
    { path: 'login', component: LoginCompanyComponent },
    { path: 'home', component: HomeCompanyComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule { }
