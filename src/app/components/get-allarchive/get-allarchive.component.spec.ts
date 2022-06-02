import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllarchiveComponent } from './get-allarchive.component';

describe('GetAllarchiveComponent', () => {
  let component: GetAllarchiveComponent;
  let fixture: ComponentFixture<GetAllarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
