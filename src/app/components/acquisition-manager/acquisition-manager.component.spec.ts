import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisitionManagerComponent } from './acquisition-manager.component';

describe('AcquisitionManagerComponent', () => {
  let component: AcquisitionManagerComponent;
  let fixture: ComponentFixture<AcquisitionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquisitionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquisitionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
