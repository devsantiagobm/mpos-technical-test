import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { ProductsService } from '@/core/services/products/products.service';
import { JsonPipe } from '@angular/common';
import { Category } from '@/core/entities/Category';
ShoppingCartComponent


@Component({
  selector: 'purchase-layout',
  imports: [RouterOutlet, LucideAngularModule, RouterLink, RouterLinkActive, ShoppingCartComponent, JsonPipe],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class PurchaseLayoutComponent {
  readonly ShoppingCartIcon = ShoppingCart;
  public isCartOpen = false;
  private productsService = inject(ProductsService)

  public categories = computed(() => {
    const categoriesSet = new Set<String[]>([])
    this.productsService.products().forEach(({ category }) => categoriesSet.add(category))
    return Array.from(categoriesSet)
  })


  public toggleOpenCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  public get products() {
    return this.productsService.products;
  }
}
