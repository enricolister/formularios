import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: "Guido",
      apellido: "Neri"
    },
    email: "guido.neri@gmail.com",
    'pasatiempos': ["Correr", "Dormir", "Comer"]
  }

  constructor() {
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', Validators.required),
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    })
    //this.forma.setValue(this.usuario);
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  guardarCambios() {
    console.log(this.forma);
    this.forma.reset({
      nombreCompleto: {
        nombre: '',
        apellido: ''
      },
      email: ''
    });
  }

}
