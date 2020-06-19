import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemGNComponent } from './shop-item-gn.component';

describe('ShopItemGNComponent', () => {
  let component: ShopItemGNComponent;
  let fixture: ComponentFixture<ShopItemGNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemGNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemGNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
