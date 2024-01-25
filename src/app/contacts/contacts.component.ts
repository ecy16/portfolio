import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

constructor(private router:Router){}
ngOnInit():void{}
onButtonClick(){
  this.router.navigate(['/home'])
}
}
