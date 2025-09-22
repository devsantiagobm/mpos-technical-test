import { AtomButtonComponent } from '@/shared/system-design/atoms/button/button.component';
import { AtomInputComponent } from '@/shared/system-design/atoms/input/input.component';
import { Location } from '@angular/common';
import { Component, inject, signal, effect } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';
import { CustomValidators } from '../validators/valdators';
import { CartService } from '../../services/cart/cart.service';
import { CheckoutService } from '../services/checkout/checkout.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'purchase-checkout-page',
  standalone: true,
  imports: [
    AtomInputComponent,
    AtomButtonComponent,
    LucideAngularModule,
    ReactiveFormsModule
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class CheckoutPageComponent {
  readonly ArrowLeftIcon = ArrowLeft;
  private fb = inject(FormBuilder);
  private location = inject(Location);
  private cartService = inject(CartService);
  private checkoutService = inject(CheckoutService);
  private router = inject(Router);
  public isLoading = signal(false);
  public costs = { tax: 10, shipping: 5.99 };

  constructor() {
    effect(() => {
      const items = this.cartService.items();
      if (!items.length) {
        this.router.navigate(['/home']);
      }
    });
  }

  get subtotal() {
    return this.cartService.total();
  }

  get total() {
    const value = Number(this.subtotal) + this.costs.tax + this.costs.shipping
    return Number.isInteger(value) ? value.toString() : value.toFixed(1);
  }

  get products() {
    return this.cartService.items();
  }

  public form = this.fb.group({
    contact: this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    }),
    shipping: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', [Validators.required]],
      city: ['', Validators.required],
      country: ['', Validators.required]
    }),
    payment: this.fb.group({
      cardNumber: ['', [Validators.required, CustomValidators.cardNumber]],
      expDate: ['', [Validators.required, CustomValidators.expDate]],
      cvc: ['', [Validators.required, CustomValidators.cvc]]
    })
  });

  public goBack() {
    this.location.back();
  }

  public checkout() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);

    this.checkoutService.checkout(this.form.getRawValue()).subscribe({
      next: (res) => {
        toast.success('Order completed successfully!');
        this.cartService.clear();
        this.router.navigate(['/home']);
      },
      error: () => {
        toast.error('Something went wrong while processing your order.');
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
