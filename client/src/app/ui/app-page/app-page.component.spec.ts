
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageComponent } from './app-page.component';

describe('AppPageComponent', () => {
  let component: AppPageComponent;
  let fixture: ComponentFixture<AppPageComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
