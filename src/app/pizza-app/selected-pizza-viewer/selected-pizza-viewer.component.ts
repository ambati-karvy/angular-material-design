import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-selected-pizza-viewer',
  templateUrl: './selected-pizza-viewer.component.html',
  styleUrls: ['./selected-pizza-viewer.component.css']
})
export class SelectedPizzaViewerComponent implements OnInit {

  @Input() selectedPizzaGroup: AbstractControl;
  @Output() addPizza = new EventEmitter();


  get toppingsArray(): FormArray {
    if (!this.selectedPizzaGroup) return;

    return this.selectedPizzaGroup.get('toppings') as FormArray;
  }
  constructor() { }

  ngOnInit() {
  }

}
