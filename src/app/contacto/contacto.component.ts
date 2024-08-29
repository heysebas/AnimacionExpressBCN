import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SedeArmeniaComponent } from '../sede-armenia/sede-armenia.component';
import { SedeCaliComponent } from '../sede-cali/sede-cali.component';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, SedeArmeniaComponent, SedeCaliComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  
  activeTab: string = 'armenia'; // Valor inicial para la pestaña activa

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  //------> formulario
   
  Formulario!: FormGroup;
  enviado: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.Formulario = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]], 
      select: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.Formulario.invalid) {
      // Si el formulario es inválido, no se envía
      return;
    }
     
    const cuerpoMensaje = `
    <div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 8px; margin: 0 auto; max-width: 600px;">
        <img src="https://emplear.com.co/assets/logo.png" style="display: block; margin: 0 auto; width: 30%; max-width: 200px;">
        <h1 style="color: #111111; text-align: center; font-size: 24px;">Detalles del mensaje:</h1>
        <p style="color: red; font-size: 16px;"><strong>Nombre:</strong><span style="color: #111111"> ${this.Formulario.value.name}</span></p>
        <p style="color: red; font-size: 16px;"><strong>Correo Electrónico:</strong><a style="color: #111111"> ${this.Formulario.value.email}<a/></p> 
        <p style="color: red; font-size: 16px;"><strong>No. Celular:</strong><a style="color: #111111"> ${this.Formulario.value.phone}<a/></p>
        <p style="color: red; font-size: 16px;"><strong>Ciudad:</strong><span style="color: #111111"> ${this.Formulario.value.select}</span></p>
        <p style="color: red; font-size: 16px;"><strong>Mensaje:</strong><span style="color: #111111"> ${this.Formulario.value.text}</span></p>
    </div>
  `;

 

    const formData = {
      to: 'coordinador@emplearsa.com',
      subject: 'Asunto del mensaje',
      text: cuerpoMensaje
    };

    this.apiService.sendEmail(formData).subscribe({
      next: () => {
        this.Formulario.reset(); 
        
      },
      error: () => {
        this.enviado = true;
        this.Formulario.reset();
        setTimeout(() => {
          this.enviado = false; 
        }, 5000);
      }
    });
  }

}

/*
formularioDatos = {
    to: '',
    subject: 'Asunto del mensaje',
    name: '',
    email: '',
    celular: '',
    text: ''
  };

  constructor(private apiService: ApiService) { }

  enviarCorreo() {
    this.prepararCorreo(); 
    this.apiService.enviarCorreo(this.formularioDatos)
      .subscribe({
        next: (res) => {
          console.log('Correo enviado correctamente', res);
          this.formularioDatos.text = '';
          // Aquí podrías mostrar un mensaje de éxito al usuario
        },
        error: (err) => {
          console.error('Error al enviar correo', err);
          this.formularioDatos.text = '';
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      });
  }

  prepararCorreo() {
    this.formularioDatos.text = `

      <h1>${this.formularioDatos.name}<h1/> <br/>
      ${this.formularioDatos.email} <br/>
      Número Celular: ${this.formularioDatos.celular} <br/>
      ${this.formularioDatos.text}
    `;
  } 
    
  --------------------
  myForm: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required,  Validators.email],
      celular: ['', Validators.required,],
      text: ['', Validators.required, Validators.min(10)]
    })
  }

        console.log('Correo enviado correctamente', response); 
         console.error('Error al enviar el correo', error);
  */
