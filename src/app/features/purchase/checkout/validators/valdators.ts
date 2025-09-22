import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

    static cardNumber(control: AbstractControl): ValidationErrors | null {
        const regex = /^[0-9]{16}$/;
        return regex.test(control.value)
            ? null
            : { custom: 'Card number must be 16 digits' };
    }

    static cvc(control: AbstractControl): ValidationErrors | null {
        const regex = /^[0-9]{3,4}$/;
        return regex.test(control.value)
            ? null
            : { custom: 'CVC must be 3 or 4 digits' };
    }

    static expDate(control: AbstractControl): ValidationErrors | null {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return regex.test(control.value)
            ? null
            : { custom: 'Expiration date must be in MM/YY format' };
    }
}
