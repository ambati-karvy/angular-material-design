import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Issue } from '../model/issue';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIssueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Issue) {
    console.log(data)

   }

  ngOnInit() {
  }

  formControl = new FormControl('',[
    Validators.required
  ])

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  public confirmAdd(): void {
    console.log(this.data)
  }

  onNoClick() : void {
    this.dialogRef.close();
  }

}
