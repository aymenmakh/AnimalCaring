import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberOfferComponent } from './member-offer.component';


describe('MemberOfferComponent', () => {
  let component: MemberOfferComponent;
  let fixture: ComponentFixture<MemberOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
