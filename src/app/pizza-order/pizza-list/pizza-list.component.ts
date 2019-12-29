import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  @Input() pizzas: Pizza[];

  @Output() edit = new EventEmitter<Pizza>();
  constructor() { }

  ngOnInit() {
  }

  editPizzza(pizza: Pizza) {
    this.edit.emit(pizza);
  }
}
