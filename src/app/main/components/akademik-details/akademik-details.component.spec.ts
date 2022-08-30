import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikDetailsComponent } from './akademik-details.component';

describe('AkademikDetailsComponent', () => {
  let component: AkademikDetailsComponent;
  let fixture: ComponentFixture<AkademikDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkademikDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
