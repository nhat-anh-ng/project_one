import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikInfopageComponent } from './akademik-infopage.component';

describe('AkademikInfopageComponent', () => {
  let component: AkademikInfopageComponent;
  let fixture: ComponentFixture<AkademikInfopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkademikInfopageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikInfopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
