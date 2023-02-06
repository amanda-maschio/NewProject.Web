import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginConsumerComponent } from './login.component';

describe('LoginConsumerComponent', () => {
  let component: LoginConsumerComponent;
  let fixture: ComponentFixture<LoginConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
