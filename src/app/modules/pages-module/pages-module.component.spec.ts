import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesModuleComponent } from './pages-module.component';

describe('PagesModuleComponent', () => {
  let component: PagesModuleComponent;
  let fixture: ComponentFixture<PagesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
