import { Component, HostBinding, Input } from '@angular/core';
import { AtomLoaderComponent } from '../loader/loader.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atom-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  imports: [AtomLoaderComponent, RouterLink, CommonModule]
})
export class AtomButtonComponent {
  @Input() variant: 'action' | 'danger' | "square" | "outline" | "success" = 'action';
  @Input() routerLink!: string;
  @Input() disabled = false;
  @Input() isLoading = false;
  @Input() fitContent = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';


  @HostBinding("style.--width") get computedWidth() {
    return this.fitContent ? "fit-content" : "100%"
  }
}
