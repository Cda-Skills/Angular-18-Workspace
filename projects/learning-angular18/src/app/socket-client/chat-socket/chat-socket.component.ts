import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { SocketClientService } from '../socket-client.service';

@Component({
  selector: 'app-chat-socket',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chat-socket.component.html',
  styleUrl: './chat-socket.component.css'
})
export class ChatSocketComponent implements OnInit{

  
  form: FormGroup;
  messages: string[] =  [];

  ngOnInit(){
    this.socketService.getMessages().subscribe((message: any) => {
        this.messages.push(message);
    });
  }

   

    constructor(private formBuilder: FormBuilder, 
                private messageService: MessageService,
                private socketService: SocketClientService){

        this.form = this.formBuilder.group({
          message: ''
        })
    }
  

    submit() {
        console.log(this.form.getRawValue());

        this.messageService.create(this.form.getRawValue()).subscribe({
          next: (response) => {
             console.log("This is a response:" + response);
          },
          error: errOr => {
            console.log("This is an error :" + errOr);
          }
        });
      }
}
