import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormprofComponent } from './formprof.component';

describe('FormprofComponent', () => {
  let component: FormprofComponent;
  let fixture: ComponentFixture<FormprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
