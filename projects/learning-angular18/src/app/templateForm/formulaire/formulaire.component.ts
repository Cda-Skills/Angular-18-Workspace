import { Component, OnInit } from '@angular/core';
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
export class FormulaireComponent implements OnInit{

  user: User = new User();


  ngOnInit(): void {}

  constructor(){

  }

  saveFromData(registerForm: NgForm){
    console.log('Le bouton fonctionne');
    console.log(this.user);
    // console.log(registerForm.form);
    console.log(registerForm.value);
    if (registerForm.invalid) {
      return;
  }

  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(registerForm.value, null, 4));
  }


  
}
