import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulaireComponent } from "./templateForm/formulaire/formulaire.component";
import { FormulaireReacComponent } from "./reactiveForm/formulaire-reac/formulaire-reac.component";
import { ChatSocketComponent } from "./socket-client/chat-socket/chat-socket.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormulaireComponent, FormulaireReacComponent, ChatSocketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learningAngular18';
}
