import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringModulTestComponent } from './string-modul-test.component';

describe('StringModulTestComponent', () => {
  let component: StringModulTestComponent;
  let fixture: ComponentFixture<StringModulTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringModulTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringModulTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
