import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { usersComponent } from './Usuario/users.component';
import { registerComponent } from './RegUsuario/register.component';
import { NotificationComponent } from './Notificaciones/notification.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamsComponent } from './Equipos/teams/teams.component';
import { StatsComponent } from './Estadisticas/stats.component';
import { InformationComponent } from './Informacion/information.component';
import { TeamservService } from './Equipos/teamserv.service';
import { HttpClientModule } from '@angular/common/http';
import { MPersonasComponent } from './personas/m-personas/m-personas.component';
import { CambContraComponent } from './camb-contra/camb-contra.component';
import { ModpersonaComponent } from './personas/modpersona/modpersona.component';
import { ModequipoComponent } from './Equipos/modequipo/modequipo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    usersComponent,
    registerComponent,
    NotificationComponent,
    NavComponent,
    TeamsComponent,
    StatsComponent,
    InformationComponent,
    MPersonasComponent,
    CambContraComponent,

    ModpersonaComponent,
      ModequipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  providers: [TeamservService,importProvidersFrom(HttpClientModule)],
  bootstrap: [AppComponent],
})
export class AppModule {}
