import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikCardComponent } from './akademik-card.component';

describe('AkademikCardComponent', () => {
  let component: AkademikCardComponent;
  let fixture: ComponentFixture<AkademikCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkademikCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
