import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FantasiaComponent } from './pages/fantasia/fantasia.component';
import { RomanceComponent } from './pages/romance/romance.component';

const appRoutes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'fantasia', component: FantasiaComponent},
  { path: 'romance', component: RomanceComponent},
  // { path: 'ficcion', component: }
  { path: '**', pathMatch: 'full', redirectTo: 'principal'},

];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
