import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-miodialog',
  templateUrl: './miodialog.component.html',
  styleUrls: ['./miodialog.component.css']
})
export class MiodialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<MiodialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  displayedColumns: string[] = ['Giorno','Ora','Aula','Prof'];


  ngOnInit() {
    console.log(this.data);
  }
  Close()
  {
    this.dialog.close();
  }

}
