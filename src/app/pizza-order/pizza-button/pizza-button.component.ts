import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-button',
  templateUrl: './pizza-button.component.html',
  styleUrls: ['./pizza-button.component.scss']
})
export class PizzaButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() parent: FormGroup;

  @Output() add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }
}
