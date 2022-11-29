import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent {
  
  
  modal2: boolean = false
  modalnew: boolean = false

  abrirModal2(){
    this.modal2 = !this.modal2
  }

  abrirModalNew(){
    this.modalnew = !this.modalnew
  }


}
