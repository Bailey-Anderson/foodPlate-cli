import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./components/default/default.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { FarmersMarketComponent } from "./farmers-markets/farmers-market.component";
import { PlateComponent } from "./plate/plate.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'farmersMarkets', component: FarmersMarketComponent},
    { path: 'exercises', component: ExercisesComponent},
    { path: 'myPlate', component: PlateComponent},
    { path: '**', component: PlateComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}