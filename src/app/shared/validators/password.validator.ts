import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            control.setErrors({passwordStrength: null});
            return null;
            
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
           if(!passwordValid)
        return {passwordStrength:true}
        else{
           control.setErrors({})
        return  null;  
        }
       
    }
}