import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Common1Component } from './common1/common1.component';
import { Common2Component } from './common2/common2.component';

const routes: Routes = [
  { path: 'common/common1', component: Common1Component },
  { path: 'common/common2', component: Common2Component },
  { path: 'common', redirectTo: 'common/common1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
