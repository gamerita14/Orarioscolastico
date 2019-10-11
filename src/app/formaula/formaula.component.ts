import { Component, OnInit } from "@angular/core";
import { RichiestahttpService } from "../richiestahttp.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DatiRicevuti, Giorno, Aula } from "../datidainviare";
import { MatDialog } from "@angular/material/dialog";
import { DialogaulaComponent } from "../dialogaula/dialogaula.component";

@Component({
  selector: "app-formaula",
  templateUrl: "./formaula.component.html",
  styleUrls: ["./formaula.component.css"]
})
export class FormaulaComponent implements OnInit {
  presel : Giorno=({
    ID:"1",
    Giorno:"Lunedi"
  })
  PERAULA = new FormGroup({
    SelAula: new FormControl("", [Validators.required]),
    SelGiorno: new FormControl(this.presel.ID, [Validators.required]),

    settimana: new FormControl(false)
  });
  giorniac: Giorno;
  dati: DatiRicevuti;
  aulaac: Aula;

  SubmitAula() {
    console.warn(this.PERAULA.value);
    if (this.PERAULA.value.settimana) {
      this.http
        .leggituttalasettimana_aula(this.PERAULA.value)
        .subscribe((dati: DatiRicevuti) => {
          this.dati = dati;
          const dialogRef = this.dialog.open(DialogaulaComponent, {
            data: { orario: this.dati, form: this.PERAULA.value },
            height: "60%",
            width: "80%"
          });
        });
    } else {
      this.http
        .leggigiorno_aula(this.PERAULA.value)
        .subscribe((dati: DatiRicevuti) => {
          this.dati = dati;
          const dialogRef = this.dialog.open(DialogaulaComponent, {
            data: { orario: this.dati, form: this.PERAULA.value },
            height: "60%",
            width: "80%"
          });
        });
    }
  }

  constructor(private http: RichiestahttpService, public dialog: MatDialog) {}

  ngOnInit() {
    this.http.leggitutteleaule().subscribe((aulaac: Aula) => {
      this.aulaac = aulaac;
    });
    this.http.leggituttiigiorni().subscribe((giorniac: Giorno) => {
      this.giorniac = giorniac;
    });
  }
}
