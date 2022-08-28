import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikFormComponent } from './akademik-form.component';

describe('AkademikFormComponent', () => {
  let component: AkademikFormComponent;
  let fixture: ComponentFixture<AkademikFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkademikFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
