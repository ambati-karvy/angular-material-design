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
      countryName:['',[Validators.required]],
      city:['',[Validators.required]],
      zipCode:['',[Validators.required]],
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


  save() {
    alert(this.exampleForm.valid)
    console.log("complete data");
    console.log(this.exampleForm.value);
  }


  edit() {

    let data = {
      "companyName":"rahgu",
      "countryName":"ramana",
      "city":"hyderabad",
      "zipCode":"78265872",
      "units":[{"unitName":"karvy","qty":"3","unitPrice":"300","unitTotalPrice":"70000"},
              {"unitName":"karvy","qty":"3","unitPrice":"300","unitTotalPrice":"70000"},
              {"unitName":"karvy","qty":"3","unitPrice":"300","unitTotalPrice":"70000"}]
    }

    this.exampleForm = this.formBuilder.group({
      companyName:this.formBuilder.control(data.companyName) ,
      countryName:this.formBuilder.control(data.countryName),
      city:this.formBuilder.control(data.city),
      zipCode:this.formBuilder.control(data.zipCode),
      street:this.formBuilder.control(''),
      units:this.formBuilder.array(data.units.map(unti => this.formBuilder.group({
        unitName:this.formBuilder.control(unti.unitName),
        qty:this.formBuilder.control(unti.qty),
        unitPrice:this.formBuilder.control(unti.unitPrice),
        unitTotalPrice:this.formBuilder.control(unti.unitTotalPrice)
      })))
    })

  }

}
