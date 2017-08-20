import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquashinclujComponent } from './squashincluj.component';

describe('SquashinclujComponent', () => {
  let component: SquashinclujComponent;
  let fixture: ComponentFixture<SquashinclujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquashinclujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquashinclujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
