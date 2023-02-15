

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './../../shared/material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { ConsumerRoutingModule } from './consumer-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { registerLocaleData } from '@angular/common';

import { ConsumerComponent } from './consumer.component';
import { HomeConsumerComponent } from './home/home.component';
import { LoginConsumerComponent } from './login/login.component';
import { RegisterConsumerComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import localePt from '@angular/common/locales/pt';
import { LoginSettingsService } from './../../services/login-settings.service';
import { LoginService } from './../../services/login.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        ConsumerComponent,
        LoginConsumerComponent,
        RegisterConsumerComponent,
        HomeConsumerComponent,
        ForgotPasswordComponent,
        ShoppingCartComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ConsumerRoutingModule,
        SharedModule,
        FormsModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        NgChartsModule,
        NgxMaskModule.forRoot(),
        NgxLoadingButtonsModule,
        NgxSkeletonLoaderModule,
        MaterialModule
    ],
    providers: [
        LoginService,
        LoginSettingsService

    ],
    bootstrap: [ConsumerComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConsumerModule { }
