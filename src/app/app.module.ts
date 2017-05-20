import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { EmbarqueComponent } from './embarque/embarque.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    EmbarqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
