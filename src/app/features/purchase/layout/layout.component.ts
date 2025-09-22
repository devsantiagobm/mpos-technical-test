import { Component, computed, ElementRef, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideAngularModule, Menu, ShoppingCart } from 'lucide-angular';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { ProductsService } from '@/core/services/products/products.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'purchase-layout',
  imports: [RouterOutlet, LucideAngularModule, RouterLink, RouterLinkActive, ShoppingCartComponent, NgClass],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class PurchaseLayoutComponent {
  readonly ShoppingCartIcon = ShoppingCart;
  readonly MenuIcon = Menu;

  public isMenuActive = false;
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

  public toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  public get products() {
    return this.productsService.products;
  }
}
