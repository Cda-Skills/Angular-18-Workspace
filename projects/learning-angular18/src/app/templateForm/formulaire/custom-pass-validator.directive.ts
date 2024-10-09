import { Directive, Input } from '@angular/core';
import { AbstractControl,  NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { __values } from 'tslib';

@Directive({
  selector: '[appCustomPassValidator][ngModel]',
  standalone: true,
  providers:[{  provide: NG_VALIDATORS, 
                useClass: CustomPassValidatorDirective, 
                multi: true }]
})
export class CustomPassValidatorDirective implements Validator{
    @Input()appCustomPassValidator : string[] = [];

  

  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } | null {
    throw new Error('Method not implemented.');
  }


  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
 

}
