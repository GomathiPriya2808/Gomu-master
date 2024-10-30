import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BabesPage } from './babes.page';

describe('BabesPage', () => {
  let component: BabesPage;
  let fixture: ComponentFixture<BabesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BabesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
