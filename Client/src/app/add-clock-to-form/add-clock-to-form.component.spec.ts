import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClockToFormComponent } from './add-clock-to-form.component';

describe('AddClockToFormComponent', () => {
  let component: AddClockToFormComponent;
  let fixture: ComponentFixture<AddClockToFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClockToFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClockToFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
