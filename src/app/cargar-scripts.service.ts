import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  Carga(archivos: string[]) {
    if (typeof document !== 'undefined') { // Verificación para asegurar que el código corre en el navegador
      for (let archivo of archivos) {
        let script = document.createElement("script");
        script.src = "./assets/js/" + archivo + ".js";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(script);
      }
    }
  }

}
