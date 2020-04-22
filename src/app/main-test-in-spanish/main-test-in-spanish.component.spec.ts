import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTestInSpanishComponent } from './main-test-in-spanish.component';

describe('MainTestInSpanishComponent', () => {
  let component: MainTestInSpanishComponent;
  let fixture: ComponentFixture<MainTestInSpanishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTestInSpanishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTestInSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
