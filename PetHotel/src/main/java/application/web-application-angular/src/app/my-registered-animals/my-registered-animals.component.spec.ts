import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegisteredAnimalsComponent } from './my-registered-animals.component';

describe('MyRegisteredAnimalsComponent', () => {
  let component: MyRegisteredAnimalsComponent;
  let fixture: ComponentFixture<MyRegisteredAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRegisteredAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRegisteredAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
