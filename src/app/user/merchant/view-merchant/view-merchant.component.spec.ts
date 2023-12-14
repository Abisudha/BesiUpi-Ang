import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMerchantComponent } from './view-merchant.component';

describe('ViewMerchantComponent', () => {
  let component: ViewMerchantComponent;
  let fixture: ComponentFixture<ViewMerchantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMerchantComponent]
    });
    fixture = TestBed.createComponent(ViewMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
