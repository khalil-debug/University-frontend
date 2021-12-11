import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerEtudiantComponent } from './creer-etudiant.component';

describe('CreerEtudiantComponent', () => {
  let component: CreerEtudiantComponent;
  let fixture: ComponentFixture<CreerEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
