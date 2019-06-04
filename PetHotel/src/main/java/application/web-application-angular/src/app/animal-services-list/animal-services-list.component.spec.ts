import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalServicesListComponent } from './animal-services-list.component';

describe('AnimalServicesListComponent', () => {
  let component: AnimalServicesListComponent;
  let fixture: ComponentFixture<AnimalServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
