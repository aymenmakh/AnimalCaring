import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingRequestComponent } from './breeding-request.component';

describe('BreedingRequestComponent', () => {
  let component: BreedingRequestComponent;
  let fixture: ComponentFixture<BreedingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
