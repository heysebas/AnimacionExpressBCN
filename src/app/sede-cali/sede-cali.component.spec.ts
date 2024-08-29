import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeCaliComponent } from './sede-cali.component';

describe('SedeCaliComponent', () => {
  let component: SedeCaliComponent;
  let fixture: ComponentFixture<SedeCaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedeCaliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SedeCaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
