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
        'apellido': new FormControl('', [Validators.required, this.noHerrera]),
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'password1' : new FormControl('', Validators.required),
      'password2':  new FormControl() //validator noigual will be set with the other method just below
    })
    //this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ])
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noHerrera(control: FormControl): { [s:string]:boolean } { //s:string es el tipo de retorno, no es un arreglo
    if (control.value.toLowerCase() === 'herrera') {
      return {
        noherrera:true
      }
    }
    return null;
  }

  noIgual(control: FormControl): { [s:string]:boolean } { //s:string es el tipo de retorno, no es un arreglo

    let forma: any = this; //en este metodo this.forma es simplemente this
  
    if (control.value !== forma.controls['password1'].value) { //si ponemos directamente this.controls nos da error
      return {
       noiguales:true
      }
    }
    return null;
  }

  guardarCambios() {
    console.log(this.forma);
    /* this.forma.reset({
      nombreCompleto: {
        nombre: '',
        apellido: ''
      },
      email: ''
    }); */
  }

}
