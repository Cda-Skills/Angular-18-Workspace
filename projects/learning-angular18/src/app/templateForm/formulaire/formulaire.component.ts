import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  user: User = new User();

  saveFromData(registerForm: NgForm){
    console.log('Le bouton fonctionne');
    // console.log(this.user);
    // console.log(registerForm.form);
    console.log(registerForm.value);
   
  }
}
