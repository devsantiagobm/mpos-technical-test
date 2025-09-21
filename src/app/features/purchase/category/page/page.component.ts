import { Component } from '@angular/core';
import { PurchaseProductComponent } from "../components/product/product.component";

@Component({
  selector: 'purchase-category-page',
  imports: [PurchaseProductComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  standalone: true
})
export class CategoryPageComponent {
  public product = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
}