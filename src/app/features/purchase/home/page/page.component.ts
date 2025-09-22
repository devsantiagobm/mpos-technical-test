import { AtomButtonComponent } from '@/shared/system-design/atoms/button/button.component';
import { Component } from '@angular/core';

@Component({
  selector: 'purchase-home-page',
  imports: [AtomButtonComponent],
  standalone: true,
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PurchaseHomePageComponent {

}
