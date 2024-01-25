import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
constructor(private router:Router){}
ngOnInit():void{}
onButtonClick(){
  this.router.navigate(['/projects'])
}

}
