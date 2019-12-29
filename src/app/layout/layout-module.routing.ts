import {Routes, RouterModule} from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';
import { InnsuesComponent } from '../innsues/innsues.component';
import { ProjectsComponent } from '../projects/projects.component';
import { UnitWorkComponent } from '../unit-work/unit-work.component';
import { PizzaOrderComponent } from '../pizza-order/pizza-order.component';
import { RestComponent } from '../rest/rest.component';
import { PizzaAppComponent } from '../pizza-app/pizza-app.component';


const routes: Routes = [
    {path: '', component: LayoutComponent,children:[
        {path:'',redirectTo:'dashboard', pathMatch:'full'},
        {path:'dashboard',component:DashboardComponent},
        {path:'form', component:FormsComponent},
        {path:'issues', component:InnsuesComponent},
        {path:'projects',component:ProjectsComponent},
        {path:'unit-work',component:UnitWorkComponent},
        {path:'pizza-order',component:PizzaOrderComponent},
        {path:'rest-data',component:RestComponent},
        {path:'pizza-app',component:PizzaAppComponent}
    ]}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LayOutRoutingModule{}
