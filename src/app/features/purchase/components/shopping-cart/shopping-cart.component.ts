import { AtomButtonComponent } from '@/shared/system-design/atoms/button/button.component';
import { Component, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { LucideAngularModule, ShoppingCart, Trash, XIcon } from 'lucide-angular';
import { animate, style, transition, trigger } from '@angular/animations';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '@/core/entities/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'purchase-shopping-cart',
  imports: [LucideAngularModule, AtomButtonComponent, LucideAngularModule],
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  animations: [
    trigger('cart', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class ShoppingCartComponent {
  readonly CloseIcon = XIcon;
  readonly DeleteIcon = Trash;
  readonly ShoppingCartIcon = ShoppingCart;

  private cartService = inject(CartService)
  private router = inject(Router)

  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>()

  @HostListener('document:keydown.escape')
  public onEscape() {
    if (this.isVisible) this.close.emit();
  }

  public closeCart() {
    this.close.emit()
  }

  public goToCheckout() {
    this.close.emit()
    this.router.navigate(['/home/checkout'])
  }

  public addProduct(product: Product) {
    this.cartService.add(product, 1)
  }

  public removeProduct(product: Product) {
    this.cartService.remove(product.id)
  }

  public substractProduct(product: Product) {
    this.cartService.subtract(product, 1)
  }

  public get products() {
    return this.cartService.items;
  }

  public get total() {
    return this.cartService.total();
  }
}
