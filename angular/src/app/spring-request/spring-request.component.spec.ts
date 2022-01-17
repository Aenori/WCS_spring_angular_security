import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRequestComponent } from './spring-request.component';

describe('SpringRequestComponent', () => {
  let component: SpringRequestComponent;
  let fixture: ComponentFixture<SpringRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
