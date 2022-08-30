import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikNewComponent } from './akademik-new.component';

describe('AkademikNewComponent', () => {
  let component: AkademikNewComponent;
  let fixture: ComponentFixture<AkademikNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkademikNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
