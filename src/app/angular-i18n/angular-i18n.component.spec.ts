import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularI18nComponent } from './angular-i18n.component';

describe('AngularI18nComponent', () => {
  let component: AngularI18nComponent;
  let fixture: ComponentFixture<AngularI18nComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularI18nComponent]
    });
    fixture = TestBed.createComponent(AngularI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
