import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtPcrFormComponent } from './rt-pcr-form.component';

describe('RtPcrFormComponent', () => {
  let component: RtPcrFormComponent;
  let fixture: ComponentFixture<RtPcrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtPcrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtPcrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
