import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit{

  user: User = new User();

  ngOnInit(): void {}

  constructor(){

  }

  // saveFromData(){
  //   console.log('Le bouton fonctionne');
  //   console.log(this.user);
  
  // }

  saveFromData(registerForm: NgForm){
    console.log('Le bouton fonctionne');
    console.log(this.user);
    console.log(registerForm.form);
    console.log('valeurs:',JSON.stringify(registerForm.value));
  }

}
