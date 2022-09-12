import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovileTableComponent } from './movile-table.component';

describe('MovileTableComponent', () => {
  let component: MovileTableComponent;
  let fixture: ComponentFixture<MovileTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovileTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
