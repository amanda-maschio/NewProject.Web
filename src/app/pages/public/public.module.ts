
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './../../shared/material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { registerLocaleData } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { ConectionErrorComponent } from './error/conection-error/conection-error.component';
import { InDevelopmentComponent } from './error/in-development/in-development.component';
import { InternalServerErrorComponent } from './error/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';

import { LoginSettingsService } from './../../services/login-settings.service';
import { LoginService } from './../../services/login.service';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        PublicComponent,
        HomeComponent,
        ConectionErrorComponent,
        InDevelopmentComponent,
        InternalServerErrorComponent,
        NotFoundComponent,
        UnauthorizedComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PublicRoutingModule,
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
    bootstrap: [PublicComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule { }
