import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGNComponent } from './shop-gn.component';

describe('ShopGNComponent', () => {
  let component: ShopGNComponent;
  let fixture: ComponentFixture<ShopGNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopGNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
