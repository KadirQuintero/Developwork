import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { OperarioComponent} from './operario/operario.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent, // Utiliza AppComponent como el componente principal
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'operario', component: OperarioComponent},
      { path: 'registrar_usuario', component: RegistrarUsuarioComponent},
      // Otras rutas aquí
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
