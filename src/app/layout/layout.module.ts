import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayOutRoutingModule } from './layout-module.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { WelcomeMaterialModule } from '../welcome-material/welcome-material.module';
import { StatComponent } from '../share/stat/stat.component';
import { FormsComponent } from '../forms/forms.component';
import { InnsuesComponent } from '../innsues/innsues.component';
import { AddIssueComponent } from '../models/add-issue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from '../projects/projects.component';
import { CompanyComponent } from '../projects/company/company.component';
import { ProjectViewComponent } from '../projects/project-view/project-view.component';
import { ProjectSizeComponent } from '../projects/project-size/project-size.component';
import { AddProjectComponent } from '../projects/add-project/add-project.component';
import { UnitWorkComponent } from '../unit-work/unit-work.component';
import { PizzaOrderComponent } from '../pizza-order/pizza-order.component';
import { PizzaCreateComponent } from '../pizza-order/pizza-create/pizza-create.component';
import { PizzaListComponent } from '../pizza-order/pizza-list/pizza-list.component';
import { JoinPipe } from '../pizza-order/join.pipe';
import { ToppingsSelectorComponent } from '../pizza-order/toppings-selector/toppings-selector.component';
import { PizzaNameComponent } from '../pizza-order/pizza-name/pizza-name.component';
import { PizzaSelectedComponent } from '../pizza-order/pizza-selected/pizza-selected.component';
import { PizzaButtonComponent } from '../pizza-order/pizza-button/pizza-button.component';
import { RestComponent } from '../rest/rest.component';
import { PizzaAppComponent } from '../pizza-app/pizza-app.component';
import { SelectedPizzaViewerComponent } from '../pizza-app/selected-pizza-viewer/selected-pizza-viewer.component';
import { AppPizzaSizePickerComponent } from '../pizza-app/app-pizza-size-picker/app-pizza-size-picker.component';

@NgModule({
  declarations: [ DashboardComponent,
    TopbarComponent,
    SidebarComponent,
    LayoutComponent,
    StatComponent,
    FormsComponent,
    InnsuesComponent,
    AddIssueComponent,
    ProjectsComponent,
    CompanyComponent,
    ProjectViewComponent,
    ProjectSizeComponent,
    AddProjectComponent,
    UnitWorkComponent,
    PizzaOrderComponent,
    PizzaCreateComponent,
    PizzaListComponent,
    JoinPipe,
    ToppingsSelectorComponent,
    PizzaNameComponent,
    PizzaSelectedComponent,
    PizzaButtonComponent,
    RestComponent,
    PizzaAppComponent,
    SelectedPizzaViewerComponent,
    AppPizzaSizePickerComponent],
  imports: [
    CommonModule,
    LayOutRoutingModule,
    WelcomeMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddIssueComponent]
})
export class LayoutModule { }
