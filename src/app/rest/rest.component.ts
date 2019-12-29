import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  data : Employee[];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    //this.getEmplotess();
  }

  getEmplotess() {
    this.apiService.getProducts().subscribe(res => {
      this.data = res;
      console.log(this.data[0].employee_age)
    },err =>{
      console.log(err);
    });
  }

  // getEmplotess1() {
  //   this.apiService.getProducts().subscribe(
  //     next(num) { console.log(num); },
  //   complete() { console.log('Finished sequence'); 
  // });
  //}

}
