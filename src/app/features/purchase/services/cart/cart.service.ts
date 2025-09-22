import { Injectable, signal, computed, effect } from '@angular/core';
import { Product } from '@/core/entities/Product';

export interface CartItem extends Product {
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private readonly STORAGE_KEY = 'shopping_cart';

    private _items = signal<CartItem[]>([]);
    readonly items = this._items.asReadonly();

    readonly total = computed(() =>
        this._items().reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    constructor() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) this._items.set(JSON.parse(stored))

        effect(() => {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._items()));
        });
    }

    add(product: Product, quantity = 1) {
        const current = this._items();
        const index = current.findIndex(({ id }) => id === product.id);

        if (quantity <= 0) return;

        if (index <= -1) {
            this._items.set([...current, { ...product, quantity }]);
            return
        }

        current[index].quantity += quantity;

        if (current[index].quantity <= 0) {
            this.remove(product.id)
        } else {
            this._items.set([...current]);
        }
    }

    subtract(product: Product, quantity = 1) {
        const current = this._items();
        const index = current.findIndex(({ id }) => id === product.id);

        if (index === -1) return;
        if (quantity <= 0) return;

        const newQuantity = current[index].quantity - quantity;

        if (newQuantity <= 0) {
            this.remove(product.id);
        } else {
            current[index].quantity = newQuantity;
            this._items.set([...current]);
        }
    }


    remove(productId: number) {
        this._items.set(this._items().filter(({ id }) => id !== productId));
    }

    clear() {
        this._items.set([]);
    }
}
