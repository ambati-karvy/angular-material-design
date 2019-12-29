import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { PizzaFormService } from './pizza-form.service';

@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {

  constructor(private pizzaFormService:PizzaFormService) { }

  ngOnInit() {
  }

  get form(): FormGroup {
    return this.pizzaFormService.form;
  }

  get selectedPizzaGroup(): AbstractControl {
    if (!this.pizzaFormService.pizzasArray.length) return;

    return this.pizzaFormService.pizzasArray.at(this.form.get('selectedPizza').value);
  }

  onPizzaAdd() {
    this.pizzaFormService.addPizza();
    this.pizzaFormService.selectPizzaForEdit(this.pizzaFormService.pizzasArray.length - 1);
  }

}
