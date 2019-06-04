import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredAnimalsListComponent } from './registered-animals-list.component';

describe('RegisteredAnimalsListComponent', () => {
  let component: RegisteredAnimalsListComponent;
  let fixture: ComponentFixture<RegisteredAnimalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredAnimalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredAnimalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
