import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: "Enrico",
    apellido: "Lister",
    email: "default@email.com",
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
{
  codigo: "ESP",
  nombre: "Espana"
}]

sexos: string[] = ["Hombre", "Mujer"]

  constructor() { }

  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm: ",forma);
    console.log("Valor: ", forma.value);
    console.log("Usuario: ", this.usuario);
  }

}
