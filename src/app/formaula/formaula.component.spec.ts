import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaulaComponent } from './formaula.component';

describe('FormaulaComponent', () => {
  let component: FormaulaComponent;
  let fixture: ComponentFixture<FormaulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
