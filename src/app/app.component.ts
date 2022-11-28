import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modal: boolean = false
  modal2: boolean = false

  abrirModal(){
    this.modal = !this.modal
  }

  abrirModal2(){
    this.modal2 = !this.modal2
  }
  

  fecharModal(){
    this.modal = false;
    this.modal2 = false;
  }
}
