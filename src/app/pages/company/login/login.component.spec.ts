import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCompanyComponent } from './login.component';

describe('LoginCompanyComponent', () => {
  let component: LoginCompanyComponent;
  let fixture: ComponentFixture<LoginCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
