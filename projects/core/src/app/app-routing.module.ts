import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Core1Component } from './core1/core1.component';
import { Core2Component } from './core2/core2.component';

const routes: Routes = [
 { path: 'core/core1', component: Core1Component },
 { path: 'core/core2', component: Core2Component },
 { path: 'core', redirectTo: 'core/core1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
