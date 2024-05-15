import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuthComponentsLayoutComponent } from './non-auth-components-layout.component';

describe('NonAuthComponentsLayoutComponent', () => {
  let component: NonAuthComponentsLayoutComponent;
  let fixture: ComponentFixture<NonAuthComponentsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonAuthComponentsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonAuthComponentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
