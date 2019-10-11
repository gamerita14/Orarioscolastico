import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { RichiestahttpService } from "../richiestahttp.service";
import { prof_giorni, prof_materie } from "../datidainviare";
import { MiodialogComponent } from '../miodialog/miodialog.component';
@Component({
  selector: "app-dialogprof",
  templateUrl: "./dialogprof.component.html",
  styleUrls: ["./dialogprof.component.css"]
})

export class DialogprofComponent implements OnInit {
  constructor(public dialog :MatDialogRef<MiodialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public http: RichiestahttpService
  ) {}

  displayedColumns: string[] = ["Giorno", "Ora", "Aula", "Classe"]; //vedere

  giornilib: prof_giorni;
  giornolibero: boolean;
  materieprof: prof_materie;
  
  Close()
  {
    this.dialog.close();
  }

  ngOnInit() {
    this.http
      .leggigiorniliberi(this.data.form)
      .subscribe((giornifunz: prof_giorni) => {
        this.giornilib = giornifunz;
        
        var x=-1;
        while(x!=undefined){
        x++;
        if (this.giornilib[x].ID_Giorno == this.data.form.SelGiorno){
          this.giornolibero = true;
          break;
        }
          
        else this.giornolibero = false;
        }
      });
    this.http
      .leggimaterie_prof(this.data.form)
      .subscribe((materiefunz: prof_materie) => {
        this.materieprof = materiefunz;
      });
  
  }
}
