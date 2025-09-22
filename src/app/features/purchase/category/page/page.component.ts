import { Component, inject, OnInit, signal } from '@angular/core';
import { PurchaseProductComponent } from "../components/product/product.component";
import { ProductsService } from '@/core/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'purchase-category-page',
  imports: [PurchaseProductComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  standalone: true,
  animations: [
    trigger('fadeIn', [
      // animate whenever the bound value changes
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]

})
export class CategoryPageComponent implements OnInit {
  private productsService = inject(ProductsService)
  private route = inject(ActivatedRoute);

  private _categoryId = signal<string | null>(null);
  public categoryId = this._categoryId.asReadonly();

  public get products() {
    const id = this._categoryId();
    return id ? this.productsService.products().filter(p => p.category === id) : [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this._categoryId.set(params.get('id'));
    });
  }
}