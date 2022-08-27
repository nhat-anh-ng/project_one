import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikListComponent } from './akademik-list.component';

describe('AkademikListComponent', () => {
  let component: AkademikListComponent;
  let fixture: ComponentFixture<AkademikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkademikListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
