import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingOfferComponent } from './breeding-offer.component';




describe('BreedingOfferComponent', () => {
  let component: BreedingOfferComponent;
  let fixture: ComponentFixture<BreedingOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
