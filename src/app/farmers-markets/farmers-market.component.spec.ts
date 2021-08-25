import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersMarketComponent } from './farmers-market.component';

describe('FarmersMarketComponent', () => {
  let component: FarmersMarketComponent;
  let fixture: ComponentFixture<FarmersMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmersMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
