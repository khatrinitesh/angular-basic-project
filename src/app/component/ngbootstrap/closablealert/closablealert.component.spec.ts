import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosablealertComponent } from './closablealert.component';

describe('ClosablealertComponent', () => {
  let component: ClosablealertComponent;
  let fixture: ComponentFixture<ClosablealertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosablealertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosablealertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
