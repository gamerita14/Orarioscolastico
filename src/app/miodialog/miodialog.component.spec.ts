import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiodialogComponent } from './miodialog.component';

describe('MiodialogComponent', () => {
  let component: MiodialogComponent;
  let fixture: ComponentFixture<MiodialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiodialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
