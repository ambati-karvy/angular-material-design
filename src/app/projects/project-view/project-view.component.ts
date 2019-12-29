import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  @Input() selectedPizzaGroup: AbstractControl;
  @Output() addProject = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get toppingsArray(): FormArray {
    if(!this.selectedPizzaGroup) return
    return this.selectedPizzaGroup.get('toppings') as FormArray;
  }

}
