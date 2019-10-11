import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogaulaComponent } from './dialogaula.component';

describe('DialogaulaComponent', () => {
  let component: DialogaulaComponent;
  let fixture: ComponentFixture<DialogaulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogaulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
