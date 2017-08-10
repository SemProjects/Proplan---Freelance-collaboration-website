/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyprojectcardComponent } from './myprojectcard.component';

describe('MyprojectcardComponent', () => {
  let component: MyprojectcardComponent;
  let fixture: ComponentFixture<MyprojectcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprojectcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprojectcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
