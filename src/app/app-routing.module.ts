import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { usersComponent } from './Usuario/users.component';
import { MPersonasComponent } from './personas/m-personas/m-personas.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { TeamsComponent } from './Equipos/teams/teams.component';
import { StatsComponent } from './Estadisticas/stats.component';
import { NotificationComponent } from './Notificaciones/notification.component';
import { registerComponent } from './RegUsuario/register.component';
import { CambContraComponent } from './camb-contra/camb-contra.component';
import { ModpersonaComponent } from './personas/modpersona/modpersona.component';
import { InformationComponent } from './Informacion/information.component';
import { ModequipoComponent } from './Equipos/modequipo/modequipo.component';
import { AuthGuard } from './Servicios/auth.guard';
import { OrdenesMComponent } from './ordenes/ordenes-m/ordenes-m.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'user',
        component: usersComponent,
        children: [
          {
            path: '',
            component: OrdenesMComponent,
          },
          {
            path: 'personas',
            component: MPersonasComponent,
          },
          {
            path: 'register',
            component: registerComponent,
          },
          { path: 'nav', component: NavComponent },
          {
            path: 'teams',
            component: TeamsComponent,
          },
          {
            path: 'information',
            component: InformationComponent,
          },
          { path: 'cambcontraseña', component: CambContraComponent },
          { path: 'stats', component: StatsComponent },
          { path: 'notification', component: NotificationComponent },
          {
            path: 'modPersona',
            component: ModpersonaComponent,
          },
          { path: 'modEquipo', component: ModequipoComponent },
        ],
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
