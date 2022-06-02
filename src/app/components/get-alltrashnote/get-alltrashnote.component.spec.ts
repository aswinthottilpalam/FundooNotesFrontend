import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlltrashnoteComponent } from './get-alltrashnote.component';

describe('GetAlltrashnoteComponent', () => {
  let component: GetAlltrashnoteComponent;
  let fixture: ComponentFixture<GetAlltrashnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAlltrashnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAlltrashnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
