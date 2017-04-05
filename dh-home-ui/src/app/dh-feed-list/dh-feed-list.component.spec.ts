import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhFeedListComponent } from './dh-feed-list.component';

describe('DhFeedListComponent', () => {
  let component: DhFeedListComponent;
  let fixture: ComponentFixture<DhFeedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhFeedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhFeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
