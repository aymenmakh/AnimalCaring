import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFinalComponent } from './detail-final.component';

describe('DetailFinalComponent', () => {
  let component: DetailFinalComponent;
  let fixture: ComponentFixture<DetailFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
