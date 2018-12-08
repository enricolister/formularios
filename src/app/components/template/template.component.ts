import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: Object = {
    nombre: "Enrico",
    apellido: "Lister",
    email: "default@email.com"
  }
  constructor() { }

  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm: ",forma);
    console.log("Valor: ", forma.value);
    console.log("Usuario: ", this.usuario);
  }

}
