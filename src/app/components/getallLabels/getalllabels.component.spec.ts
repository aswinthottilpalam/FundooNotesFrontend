import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalllabelsComponent } from './getalllabels.component';

describe('GetalllabelsComponent', () => {
  let component: GetalllabelsComponent;
  let fixture: ComponentFixture<GetalllabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalllabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalllabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
