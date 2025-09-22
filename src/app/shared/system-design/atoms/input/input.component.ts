import { ErrorMessagesPipe } from '@/shared/pipes/error-messages/error-messages.pipe';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Eye, EyeOff } from 'lucide-angular';

@Component({
  selector: 'atom-input',
  templateUrl: './input.component.html',
  standalone: true,
  imports: [LucideAngularModule, ReactiveFormsModule, ErrorMessagesPipe],
  styleUrls: ['./input.component.scss'],
  animations: [
    trigger('errorMessage', [
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
export class AtomInputComponent {
  readonly PasswordIcon = Eye;
  readonly NotPasswordIcon = EyeOff;

  @Input() label?: string;
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() placeholder: string = "";
  @Input() type: string = 'text';
  @Input() isRequired: boolean = true;
  @Input() readOnly: boolean = false;

  isPasswordVisible = false;

  get currentType(): string {
    if (this.type !== 'password') return this.type;
    return this.isPasswordVisible ? 'text' : 'password';
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get showError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }
}
