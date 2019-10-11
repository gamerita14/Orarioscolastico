import { Component, OnInit } from "@angular/core";
import { RichiestahttpService } from "../richiestahttp.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DatiRicevuti, Giorno, Ora, Classe } from "../datidainviare";
import { MatDialog } from "@angular/material/dialog";
import { MiodialogComponent } from "../miodialog/miodialog.component";




@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  giorniac: Giorno;
  dati: DatiRicevuti;
  classiac: Classe;
  presel : Giorno=({
    ID:"1",
    Giorno:"Lunedi"
  })
  
  PERCLASSE = new FormGroup({
    SelClasse: new FormControl([Validators.required]),
    SelGiorno: new FormControl(this.presel.ID,[Validators.required]),
    settimana: new FormControl(false)
  });

  Submitclasse() {
    console.warn(this.PERCLASSE.value);
    if (this.PERCLASSE.value.settimana) {
      this.http
        .leggituttalasettimana_classe(this.PERCLASSE.value)
        .subscribe((dati: DatiRicevuti) =>  {
          this.dati = dati;
          const dialogRef = this.dialog.open(MiodialogComponent, {
            data: { orario: this.dati, form: this.PERCLASSE.value },
            height: "60%",
            width: "80%"
          });
        });
    } else {
      this.http
        .leggigiorno_classe(this.PERCLASSE.value)
        .subscribe((dati: DatiRicevuti)  => {
          this.dati = dati;
          const dialogRef = this.dialog.open(MiodialogComponent, {
            data: { orario: this.dati, form: this.PERCLASSE.value },
            height: "60%",
            width: "80%"
          });
        });
    }
  }

  constructor(private http: RichiestahttpService, public dialog: MatDialog) {}
  
  async ngOnInit() {
      
    this.http.leggitutteleclassi().subscribe((classiac: Classe) => {
      this.classiac = classiac;

      
      
    });
    this.http.leggituttiigiorni().subscribe((giorniac: Giorno) => {
      this.giorniac = giorniac;
      console.log(this.giorniac);
    });

  }
}