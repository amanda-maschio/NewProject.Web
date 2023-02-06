import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginConsumerComponent } from './login/login.component';
import { HomeConsumerComponent } from './home/home.component';
import { RegisterConsumerComponent } from './register/register.component';

const routes: Routes = [
    { path: 'login', component: LoginConsumerComponent },
    { path: 'home', component: HomeConsumerComponent },
    { path: 'register', component: RegisterConsumerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumerRoutingModule { }
