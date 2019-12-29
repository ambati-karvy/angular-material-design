import { Component, OnInit, ViewChild } from '@angular/core';
import { Issue } from '../model/issue';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddIssueComponent } from '../models/add-issue.component';


const ELEMENT_DATE: Issue[] =[
  {id:1,state:'andra',title:'eegp',url:'www.eegp.com'},
  {id:2,state:'telengana',title:'eegp',url:'www.eegp.com'},
  {id:3,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:4,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:5,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:6,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:7,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:8,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:9,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:10,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:11,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:12,state:'kerala',title:'eegp',url:'www.eegp.com'},
  {id:13,state:'kerala',title:'eegp',url:'www.eegp.com'},

]

@Component({
  selector: 'app-innsues',
  templateUrl: './innsues.component.html',
  styleUrls: ['./innsues.component.css']
})
export class InnsuesComponent implements OnInit {

  displayedColumns : string[] = ['id','title','state','url','action']
  dataSource = new MatTableDataSource<Issue>(ELEMENT_DATE);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  addNew(issue : Issue) {
    const dialogRef = this.dialog.open(AddIssueComponent,{
      data: issue
    });


  }

  startEdit(issue : Issue) {
    const dialogRef = this.dialog.open(AddIssueComponent,{
      data: issue
    });
  }

}
