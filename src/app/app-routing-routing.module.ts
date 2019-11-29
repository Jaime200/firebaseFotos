import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path:'',loadChildren: './components/components.module#ComponentsModule' } //import('./components/components.module#ComponentsModule').then(m => m.ComponentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
