import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAllAnimalsComponent } from './my-all-animals.component';

describe('MyAllAnimalsComponent', () => {
  let component: MyAllAnimalsComponent;
  let fixture: ComponentFixture<MyAllAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAllAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAllAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
