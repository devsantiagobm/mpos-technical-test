import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorMessage',
  standalone: true
})
export class ErrorMessagesPipe implements PipeTransform {
  transform(errors: ValidationErrors | null): string | null {
    if (!errors) return null;

    if (errors['required']) return 'This field is required';
    if (errors['email']) return 'Invalid email address';
    if (errors['maxlength']) return `Maximum length is ${errors['maxlength'].requiredLength} characters`;
    if (errors['minlength']) return `Minimum length is ${errors['minlength'].requiredLength} characters`;
    if (errors['custom']) return errors['custom']

    return 'Unknown error';
  }
}
