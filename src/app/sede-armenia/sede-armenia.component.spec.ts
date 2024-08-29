import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeArmeniaComponent } from './sede-armenia.component';

describe('SedeArmeniaComponent', () => {
  let component: SedeArmeniaComponent;
  let fixture: ComponentFixture<SedeArmeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedeArmeniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SedeArmeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
