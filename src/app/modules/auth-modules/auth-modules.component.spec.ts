import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModulesComponent } from './auth-modules.component';

describe('AuthModulesComponent', () => {
  let component: AuthModulesComponent;
  let fixture: ComponentFixture<AuthModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
