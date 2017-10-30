import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInfomationComponent } from './blog-infomation.component';

describe('BlogInfomationComponent', () => {
  let component: BlogInfomationComponent;
  let fixture: ComponentFixture<BlogInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
