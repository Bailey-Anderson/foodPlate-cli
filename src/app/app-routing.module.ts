import { NgModule } from '@angular/core';
import { CanActivate, Route, RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FarmersMarketComponent } from './farmers-markets/farmers-market.component';
import { foodGroupsRoutes } from './food-groups/food-groups.routing';
import { FoodComponent } from './food/food.component';
import { PlateComponent } from './plate/plate.component';
import { RegisterComponent } from './register/register.component';
import { RegisterGuardService } from './services/register-guard.service';

class AllowFullAccessGuard implements CanActivate {
  canActivate() {
    console.log('FullAccessGuard has been activated');
    return true;
  }
}

const fallbackRoute: Route = {
  path: '**',
  component: DefaultComponent,
};

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'myPlate', component: PlateComponent, canActivate: [RegisterGuardService]},
      { path: '', component: DefaultComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'farmersMarkets', component: FarmersMarketComponent },
      { path: 'exercises', component: ExercisesComponent },
      { path: 'nutritionInfo', component: FoodComponent },
      { path: 'myPlate', component: PlateComponent },
      ...foodGroupsRoutes,
      fallbackRoute,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RegisterGuardService,]
})
export class AppRoutingModule {}
