import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhFeedComponent } from './dh-feed.component';

describe('DhFeedComponent', () => {
  let component: DhFeedComponent;
  let fixture: ComponentFixture<DhFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
