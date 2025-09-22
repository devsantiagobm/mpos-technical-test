import { Product } from '@/core/entities/Product';
import { CartService } from '@/features/purchase/services/cart/cart.service';
import { AtomButtonComponent } from '@/shared/system-design/atoms/button/button.component';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { input, computed, inject, Component } from '@angular/core';

@Component({
  selector: 'purchase-product',
  imports: [AtomButtonComponent, LucideAngularModule],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class PurchaseProductComponent {
  readonly ShoppingCartIcon = ShoppingCart;
  readonly product = input.required<Product>();

  private cartService = inject(CartService);
  
  public quantity = computed(() => {
    const product = this.product();
    return this.cartService.items().find(({ id }) => product.id === id)?.quantity ?? 0;
  });

  public add() {
    this.cartService.add(this.product(), 1);
  }

  public substract() {
    this.cartService.subtract(this.product(), 1);
  }
}
