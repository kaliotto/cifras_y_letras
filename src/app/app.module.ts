import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CifrasComponent } from './components/cifras/cifras.component';
import { LetrasComponent } from './components/letras/letras.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { IntroComponent } from './components/intro/intro.component';
import { TimerComponent } from './components/shared/timer/timer.component';
import { QuienGanaComponent } from './components/shared/quien-gana/quien-gana.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CifrasComponent,
    LetrasComponent,
    ResultadoComponent,
    IntroComponent,
    TimerComponent,
    QuienGanaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
