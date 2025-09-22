import { Component, inject, OnInit, signal } from '@angular/core';
import { PurchaseProductComponent } from "../components/product/product.component";
import { ProductsService } from '@/core/services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'purchase-category-page',
  imports: [PurchaseProductComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  standalone: true,

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