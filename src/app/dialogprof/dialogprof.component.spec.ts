import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogprofComponent } from './dialogprof.component';

describe('DialogprofComponent', () => {
  let component: DialogprofComponent;
  let fixture: ComponentFixture<DialogprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
