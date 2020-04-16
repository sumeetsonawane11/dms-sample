import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreSharedModule } from 'projects/core/src/app/app.module';
import { CommonSharedModule } from 'projects/common/src/app/app.module';

const routes: Routes = [
  {path: 'core', 
    loadChildren: '../../projects/core/src/app/app.module#CoreSharedModule'},
  {path: 'common', 
    loadChildren: '../../projects/common/src/app/app.module#CommonSharedModule'},
  { path: '**', redirectTo: '/core/core1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CoreSharedModule.forRoot(),
    CommonSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
