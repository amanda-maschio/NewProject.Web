
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './../../shared/material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { CompanyRoutingModule } from './company-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { registerLocaleData } from '@angular/common';

import { CompanyComponent } from './company.component';
import { HomeCompanyComponent } from './home/home.component';
import { LoginCompanyComponent } from './login/login.component';

import localePt from '@angular/common/locales/pt';
import { LoginSettingsService } from './../../services/login-settings.service';
import { LoginService } from './../../services/login.service';

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        CompanyComponent,
        LoginCompanyComponent,
        HomeCompanyComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CompanyRoutingModule,
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
    bootstrap: [CompanyComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanyModule { }
