import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioComponent }   from './funcionario/funcionario.component';
import { EmbarqueComponent }   from './embarque/embarque.component';

const routes: Routes = [
  { path: '', redirectTo: '/funcionario', pathMatch: 'full' },
  { path: 'funcionario',  component: FuncionarioComponent },
  { path: 'embarque',  component: EmbarqueComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 
export class AppRoutingModule {} 