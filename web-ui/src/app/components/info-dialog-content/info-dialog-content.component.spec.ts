import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDialogContentComponent } from './info-dialog-content.component';

describe('InfoDialogContentComponent', () => {
  let component: InfoDialogContentComponent;
  let fixture: ComponentFixture<InfoDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
