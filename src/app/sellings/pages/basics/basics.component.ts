import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  nameLower:string = 'andres';
  nameUpper:string = 'ANDRES'
  fullName:string = 'aNDreS wILcHes'

  date: Date = new Date(); // js actual date

}
