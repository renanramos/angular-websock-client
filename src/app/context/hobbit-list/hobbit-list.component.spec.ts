import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbitListComponent } from './hobbit-list.component';

describe('HobbitListComponent', () => {
  let component: HobbitListComponent;
  let fixture: ComponentFixture<HobbitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
