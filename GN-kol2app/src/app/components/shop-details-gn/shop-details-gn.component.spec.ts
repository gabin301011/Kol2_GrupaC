import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsGNComponent } from './shop-details-gn.component';

describe('ShopDetailsGNComponent', () => {
  let component: ShopDetailsGNComponent;
  let fixture: ComponentFixture<ShopDetailsGNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsGNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsGNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
