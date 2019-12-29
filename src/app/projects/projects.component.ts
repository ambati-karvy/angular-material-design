import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  get form(): FormGroup {
    return this.projectService.form;
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  get selectedPizzaGroup() : AbstractControl {

    //console.log(this.projectService.pizzasArray)
    if (!this.projectService.pizzasArray.length) return;
    //console.log(this.projectService.pizzasArray)

    return this.projectService.pizzasArray.at(this.form.get('selectedPizza').value);
  }

  onProjectAdd() {
    
    this.projectService.addProject();
    this.projectService.selectPizzaForEdit(this.projectService.pizzasArray.length - 1)
  }

}
