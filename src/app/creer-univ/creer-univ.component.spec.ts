import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUnivComponent } from './creer-univ.component';

describe('CreerUnivComponent', () => {
  let component: CreerUnivComponent;
  let fixture: ComponentFixture<CreerUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerUnivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
