import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  checkout(_: unknown): Observable<{ success: boolean; message: string }> {

    return of({
      success: true,
      message: 'Order completed successfully!'
    }).pipe(
      delay(2000)
    );
  }
}
