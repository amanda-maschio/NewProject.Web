import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginConsumerComponent } from './login/login.component';
import { HomeConsumerComponent } from './home/home.component';
import { RegisterConsumerComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
    { path: 'login', component: LoginConsumerComponent },
    { path: 'home', component: HomeConsumerComponent },
    { path: 'register', component: RegisterConsumerComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumerRoutingModule { }
