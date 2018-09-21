import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingDetailComponent } from './breeding-detail.component';

describe('BreedingDetailComponent', () => {
  let component: BreedingDetailComponent;
  let fixture: ComponentFixture<BreedingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
