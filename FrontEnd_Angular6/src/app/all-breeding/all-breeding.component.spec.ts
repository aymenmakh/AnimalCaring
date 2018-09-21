import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBreedingComponent } from './all-breeding.component';

describe('AllBreedingComponent', () => {
  let component: AllBreedingComponent;
  let fixture: ComponentFixture<AllBreedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBreedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBreedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


