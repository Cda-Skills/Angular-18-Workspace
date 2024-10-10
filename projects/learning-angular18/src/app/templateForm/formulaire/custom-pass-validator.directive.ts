import { Directive, Input } from '@angular/core';
import {  AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';


@Directive({
  selector: '[appCustomPassValidator]',
  standalone: true,
  providers:[{  provide: NG_VALIDATORS, 
                useClass: CustomPassValidatorDirective, 
                multi: true }]
})
export class CustomPassValidatorDirective implements Validator{
    @Input('appCustomPassValidator') controlPasswordS!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToCompare = control.root.get(this.controlPasswordS);
    if(controlToCompare){
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(()=> {
      control.updateValueAndValidity();
      subscription.unsubscribe();
    });
    }
    return controlToCompare && controlToCompare.value !== controlToCompare.value ? { 'appCustomPassValidator': true} : null;
  }


}
