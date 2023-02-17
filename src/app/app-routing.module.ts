import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PredictComponent } from './pages/predict/predict.component';

const routes: Routes = [
  {path: '', redirectTo : 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: MainComponent},
  {path: 'predict', component: PredictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
