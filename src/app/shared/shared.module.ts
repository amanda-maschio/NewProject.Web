import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { MaterialModule } from './material/material.module';
import { BootstrapModule } from './ngx-bootstrap/bootstrap.module';
import { TopbarComponent } from './consumer/topbar/topbar.component';
import { FooterComponent } from './consumer/footer/footer.component';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MaterialModule,
    BootstrapModule
  ],
  exports: [
    ConfirmModalComponent,
    TopbarComponent,
    FooterComponent
  ],
  bootstrap: [ConfirmModalComponent, TopbarComponent, FooterComponent]
})
export class SharedModule { }
