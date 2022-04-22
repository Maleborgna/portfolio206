import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { BotonDescargarComponent } from './boton-descargar/boton-descargar.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SocialBarComponent } from './social-bar/social-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BotonDescargarComponent,
    EducacionComponent,
    ExperienciasComponent,
    HeaderComponent,
    SkillsComponent,
    LoginComponent,
    ProyectosComponent,
    SocialBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
