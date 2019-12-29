import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { ProjectService } from '../project.service';
import { IPizzaItem } from 'src/app/model/ipizza-item';
import { IToppingItem } from 'src/app/model/itopping-item';
import { PizzaSizeEnum } from 'src/app/model/project-form';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Input() group: FormGroup;

  @Output() deletePizza = new EventEmitter<number>();
  @Output() addProject = new EventEmitter();
  @Output() pizzaSelected = new EventEmitter<number>();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  get pizzasArray(): FormArray {
    return this.group.get('pizzas') as FormArray;
  }

  getPizzaListItemClassStates(pizza: AbstractControl, index: number) {
    return {
      'PizzaList__item--active': this.group.get('selectedPizza').value === index,
      'PizzaList__item--has-error': !pizza.valid && pizza.dirty
    };
  }

  getPizzaTitle(pizza: IPizzaItem): string {

    const selectedToppings = this.projectService.getSelectedToppings((pizza.toppings as IToppingItem[]))
    .map(i => i.name);

    const toppingsString = this.getToppingsString(selectedToppings);
    const sizeString = this.getPizzaSizeTitle(pizza.size);

    return `${sizeString} pizza ${toppingsString}`;
  }

  private getToppingsString(toppings: string[]): string {
    if (!toppings || !toppings.length) return '';

    return `- ${toppings.toString()}`;
  }

  private getPizzaSizeTitle(size: PizzaSizeEnum): string {
    let pizzaSize;
    switch (size) {
      case PizzaSizeEnum.SMALL:
        pizzaSize = 'S';
        break;
      case PizzaSizeEnum.MEDIUM:
        pizzaSize = 'M';
        break;
      case PizzaSizeEnum.LARGE:
        pizzaSize = 'L';
        break;
    }

    return pizzaSize;
  }

}
