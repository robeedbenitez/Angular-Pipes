import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'aNdREs feLIpE';
  valor: number = 1000;
  obj = {
    nombre: 'Andres Felipe',
    apellidos: 'Torres',
    Dinero: 1500
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}
