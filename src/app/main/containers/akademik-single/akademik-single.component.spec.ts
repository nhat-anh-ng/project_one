import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikSingleComponent } from './akademik-single.component';

describe('AkademikSingleComponent', () => {
  let component: AkademikSingleComponent;
  let fixture: ComponentFixture<AkademikSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkademikSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
