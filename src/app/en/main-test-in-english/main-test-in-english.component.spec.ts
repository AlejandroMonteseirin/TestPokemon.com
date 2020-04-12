import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTestInEnglishComponent } from './main-test-in-english.component';

describe('MainTestInEnglishComponent', () => {
  let component: MainTestInEnglishComponent;
  let fixture: ComponentFixture<MainTestInEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTestInEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTestInEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
