import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/cardetails/cardetails.component';
import { OnecardetailComponent } from './components/onecardetail/onecardetail.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDetailsComponent},
  {path:"cars/brand/:brandId",component:CarDetailsComponent},
  {path:"cars/color/:colorId",component:CarDetailsComponent},
  {path:"cars/:carId",component:OnecardetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
