import { Injectable, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { Product } from '@/core/entities/Product';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private readonly _products = signal<Product[]>([]);
    private readonly _loading = signal<boolean>(false);
    private readonly _error = signal<string | null>(null);

    readonly products = this._products.asReadonly();
    readonly loading = this._loading.asReadonly();
    readonly error = this._error.asReadonly();

    private readonly API_URL = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) {
        effect(() => {
            this.loadProducts();
        });
    }

    loadProducts() {
        this._loading.set(true);
        this._error.set(null);

        this.http.get<Product[]>(this.API_URL)
            .pipe(
                catchError(() => {
                    this._error.set('Error al cargar productos');
                    return of([]);
                }))
            .subscribe((products) => {
                this._products.set(products);
                this._loading.set(false);
            });
    }
}
