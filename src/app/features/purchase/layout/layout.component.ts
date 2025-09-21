import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
ShoppingCartComponent


@Component({
  selector: 'purchase-layout',
  imports: [RouterOutlet, LucideAngularModule, RouterLink, RouterLinkActive, ShoppingCartComponent],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class PurchaseLayoutComponent {
  readonly ShoppingCartIcon = ShoppingCart;

  public isCartOpen = false;

  public toggleOpenCart() {
    this.isCartOpen = !this.isCartOpen
  }
}
