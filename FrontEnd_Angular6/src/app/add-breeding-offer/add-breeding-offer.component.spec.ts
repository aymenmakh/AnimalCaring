import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreedingOfferComponent } from './add-breeding-offer.component';

describe('AddBreedingOfferComponent', () => {
  let component: AddBreedingOfferComponent;
  let fixture: ComponentFixture<AddBreedingOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBreedingOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBreedingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
