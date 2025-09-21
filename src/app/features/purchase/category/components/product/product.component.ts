import { Product } from '@/core/entities/Product';
import { AtomButtonComponent } from '@/shared/system-design/atoms/button/button.component';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';

@Component({
  selector: 'purchase-product',
  imports: [AtomButtonComponent, LucideAngularModule],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class PurchaseProductComponent {
  readonly ShoppingCartIcon = ShoppingCart;
  @Input() product!: Product;

}

