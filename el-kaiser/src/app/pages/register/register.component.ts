import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registro: any = {
    nombreCompleto: '',
    correo: '',
    contrasena: '',
    edad: null,
    direccion: ''
  };
  
  mensajeExito: string | null = null;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.mensajeExito = `El registro de ${this.registro.nombreCompleto} se ha guardado con éxito.`;
      this.limpiarFormulario(form);
    }
  }

  limpiarFormulario(form: NgForm) {
    form.resetForm();
    this.registro = {
      nombreCompleto: '',
      correo: '',
      contrasena: '',
      edad: null,
      direccion: ''
    };
  }

  validarCorreo(control: FormControl) {
    const correo = control.value;
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (correo && !emailRegex.test(correo)) {
      return { correoInvalido: true };
    }
    return null;
  }
}
