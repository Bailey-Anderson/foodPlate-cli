import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./components/default/default.component";
import { PlateComponent } from "./plate/plate.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PlateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}