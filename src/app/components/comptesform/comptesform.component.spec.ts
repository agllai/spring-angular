import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesformComponent } from './comptesform.component';

describe('ComptesformComponent', () => {
  let component: ComptesformComponent;
  let fixture: ComponentFixture<ComptesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
