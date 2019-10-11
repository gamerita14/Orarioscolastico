import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MiodialogComponent } from '../miodialog/miodialog.component';
@Component({
  selector: "app-dialogaula",
  templateUrl: "./dialogaula.component.html",
  styleUrls: ["./dialogaula.component.css"]
})
export class DialogaulaComponent implements OnInit {
  constructor(public dialog :MatDialogRef<MiodialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  displayedColumns: string[] = ["Giorno", "Classe", "Ora", "Prof"];
  Close()
  {
    this.dialog.close();
  }

  ngOnInit() {
    console.log(this.data);
  }
}
