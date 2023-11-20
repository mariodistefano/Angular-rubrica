import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabellaComponent } from '../tabella/tabella.component';
import { FormComponent } from '../form/form.component';


const rotte:Routes=[
{
  path:'form/:id',
  component:FormComponent
}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotte)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
