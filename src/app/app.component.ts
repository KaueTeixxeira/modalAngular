import { Component, ViewChild } from '@angular/core';
import { ModalComponentComponent } from './modal-component/modal-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dsadadsa')
  variavelModal: ModalComponentComponent

  modal: boolean = false
  modal2: boolean = false

  abrirModal() {
    console.log(this.variavelModal)
    this.variavelModal.abrirModal2()
  }


  
}
