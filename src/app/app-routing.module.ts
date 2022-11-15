import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp01Component } from './feature01/comp01/comp01.component';

const routes: Routes = [
  { path: '', component: Comp01Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
