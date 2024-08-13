import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTranslateComponent } from './ngx-translate.component';

describe('NgxTranslateComponent', () => {
  let component: NgxTranslateComponent;
  let fixture: ComponentFixture<NgxTranslateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTranslateComponent]
    });
    fixture = TestBed.createComponent(NgxTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
