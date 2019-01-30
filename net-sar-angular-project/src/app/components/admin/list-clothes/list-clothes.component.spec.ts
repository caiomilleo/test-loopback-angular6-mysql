/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListClothesComponent } from './list-clothes.component';

describe('ListClothesComponent', () => {
  let component: ListClothesComponent;
  let fixture: ComponentFixture<ListClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
