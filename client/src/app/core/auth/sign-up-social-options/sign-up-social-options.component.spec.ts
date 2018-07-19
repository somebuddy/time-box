import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSocialOptionsComponent } from './sign-up-social-options.component';

describe('SignUpSocialOptionsComponent', () => {
  let component: SignUpSocialOptionsComponent;
  let fixture: ComponentFixture<SignUpSocialOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpSocialOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSocialOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
