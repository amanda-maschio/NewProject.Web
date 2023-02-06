import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SnackBarComponent } from './pages/snackbar/snack-bar.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxMaskModule } from 'ngx-mask'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getPortuguesePaginatorIntl } from './utils/custom-mat-paginator-intl';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoginService } from './services/login.service';
import { LoginSettingsService } from './services/login-settings.service';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgxMaskModule.forRoot(),
    NgxLoadingButtonsModule,
    MatSortModule,
    MatSidenavModule,
    NgxSkeletonLoaderModule,
    MaterialModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }, {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    LoginService,
    LoginSettingsService

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
