import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRequestPageComponent } from './single-request-page.component';

describe('SingleRequestPageComponent', () => {
  let component: SingleRequestPageComponent;
  let fixture: ComponentFixture<SingleRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
