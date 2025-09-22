import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHomePageComponent } from './page.component';
import { AtomButtonComponent } from '@/shared/system-design/atoms/button/button.component';
import { ActivatedRoute } from '@angular/router';

describe('PurchaseHomePageComponent', () => {
  let component: PurchaseHomePageComponent;
  let fixture: ComponentFixture<PurchaseHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseHomePageComponent, AtomButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
