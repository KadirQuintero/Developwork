import { NgModule } from '@angular/core';
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [TeamservService],
  bootstrap: [AppComponent],
})
export class AppModule {}
