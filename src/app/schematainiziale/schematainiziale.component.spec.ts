import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchematainizialeComponent } from './schematainiziale.component';

describe('SchematainizialeComponent', () => {
  let component: SchematainizialeComponent;
  let fixture: ComponentFixture<SchematainizialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchematainizialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchematainizialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
