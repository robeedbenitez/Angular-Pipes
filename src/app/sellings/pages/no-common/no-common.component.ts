import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styleUrls: ['./no-common.component.css']
})
export class NoCommonComponent{

  //i18nSelect pipe
  name:string = 'Andres';
  genre:string = 'masculino';

  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural pipe
  clients: string[] = ['sofia','Andres','juan'];
  clientsMap = {
    '=0': 'no se tiene ningun cliente.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando.'
  }

  //keyvalue pipe
  // object, properties, key value
  person = {
    name: 'Andres',
    age:23,
    address:'Bogota, Colombia'
  }

  // JSON pipe
  heroes = [
    {
      name: 'superman',
      fly: true
    },
    {
      name: 'robin',
      fly: false
    },
    {
      name: 'aquaman',
      fly: false
    }
  ]

  //Async pipe
  // observable that emits numeric numbers (1,2....1000)
  myObservable = interval(1000)

  promiseValue = new Promise((resolve,reject) =>{
    setTimeout  (() =>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
