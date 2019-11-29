
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga/carga.component';
import { FotosComponent } from './fotos/fotos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgDropFilesDirective } from '../directives/ng-drop-files.directive';
const routes:Routes = [
  { path:'carga', component: CargaComponent  },
  { path:'fotos', component: FotosComponent }
]

@NgModule({
  declarations: [
    CargaComponent
    ,FotosComponent
    ,NgDropFilesDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CargaComponent,
    FotosComponent
  ]
})
export class ComponentsModule { }
