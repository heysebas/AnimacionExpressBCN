import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
          { path: 'Inicio', component: HomeComponent },
          { path: 'Contacto', component: ContactoComponent },
          { path: 'Nosotros', component: NosotrosComponent}
          // Aquí puedes agregar más rutas hijas según sea necesario
        ]
      }
];
