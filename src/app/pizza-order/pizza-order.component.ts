import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { Pizza, Topping } from './pizza';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.scss']
})
export class PizzaOrderComponent implements OnInit {
  editPizzaInput : Pizza;
  pizzas$ = this.pizzaService.select<Pizza[]>('pizzas');
  toppings$ = this.pizzaService.select<Topping[]>('toppings');
  constructor(private pizzaService:PizzaService) { }

  ngOnInit() {
  }

  addPizza(event: any) {
    this.pizzaService.addPizza(event);
  }

  editPizza(pizza:Pizza) {
    this.editPizzaInput = pizza;
  }
}
