import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-unit-work',
  templateUrl: './unit-work.component.html',
  styleUrls: ['./unit-work.component.css']
})
export class UnitWorkComponent implements OnInit {

  exampleForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      companyName:['',[Validators.required]] ,
      countryName:[''],
      city:[''],
      zipCode:[''],
      street:[''],
      units:this.formBuilder.array([
        this.getUnit()
      ])
    })
  }

  private getUnit() {
    return this.formBuilder.group({
      unitName:['',Validators.required],
      qty:['',Validators.required],
      unitPrice:['',Validators.required],
      unitTotalPrice:['',Validators.required]
    });
  }

  addUnit() {
    const control = <FormArray>this.exampleForm.controls['units'];
    control.push(this.getUnit());
  }
  removeUnit(i: number) {
    const control = <FormArray>this.exampleForm.controls['units'];
    control.removeAt(i);
  }

  /**
   * This is one of the way how clear units fields.
   */
  clearAllUnits() {
    const control = <FormArray>this.exampleForm.controls['units'];
    while(control.length) {
      control.removeAt(control.length - 1);
    }
    control.clearValidators();
    control.push(this.getUnit());
  }

}
