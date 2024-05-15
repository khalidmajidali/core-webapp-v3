import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponentsLayoutComponent } from './auth-components-layout.component';

describe('AuthComponentsLayoutComponent', () => {
  let component: AuthComponentsLayoutComponent;
  let fixture: ComponentFixture<AuthComponentsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponentsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthComponentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
