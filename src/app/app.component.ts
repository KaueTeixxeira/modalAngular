import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { ModalComponentComponent } from './modal-component/modal-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('dsadadsa')
  variavelModal: ModalComponentComponent

  modal2: boolean = false

  abrirModal() {
    this.variavelModal.abrirModal2()
  }

  personagens: object[] = [];
  selectedTag: string
  linkImage: string;
  statusCode: string;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getTags()
    .subscribe(tags => {
      console.log(tags)
      this.personagens = tags.results;
    });
  }

  

  imagemPersonagem: string;
  generoPersonagem: string;
  nomePersonagem: string;
  tipoPersonagem: string;
  statusPersonagem: string;
  origemPersonagem: string;

  mostraDados(personagem: object) {
    console.log(personagem['status'])
    this.imagemPersonagem = personagem['image'];
    this.generoPersonagem = personagem['gender'];
    this.tipoPersonagem = personagem['species'];
    this.nomePersonagem = personagem['name'];
    this.statusPersonagem = personagem['status'] == "unknown"? "Desconhecido":  personagem['status']
    this.origemPersonagem = personagem['location']['name'];
    this.variavelModal.abrirModal2()
  }
  
}
