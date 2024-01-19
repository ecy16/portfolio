import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private router:Router){}
  ngOnInit():void{}
  onButtonClick(){
    this.router.navigate(['/contacts'])
  }

}
