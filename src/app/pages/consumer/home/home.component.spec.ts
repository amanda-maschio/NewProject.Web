import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsumerComponent } from './home.component';

describe('HomeConsumerComponent', () => {
  let component: HomeConsumerComponent;
  let fixture: ComponentFixture<HomeConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
