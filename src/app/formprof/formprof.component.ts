import { Component, OnInit } from "@angular/core";
import { RichiestahttpService } from "../richiestahttp.service";
import { Prof, Giorno, DatiRicevuti } from "../datidainviare";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { DialogprofComponent } from "../dialogprof/dialogprof.component";
@Component({
  selector: "app-formprof",
  templateUrl: "./formprof.component.html",
  styleUrls: ["./formprof.component.css"]
})
export class FormprofComponent implements OnInit {
  constructor(public http: RichiestahttpService, public dialog: MatDialog) {}

  profac: Prof;

  giorniac: Giorno;

  dati: DatiRicevuti;
  presel : Giorno=({
    ID:"1",
    Giorno:"Lunedi"
  })

  PERPROF = new FormGroup({
    SelProf: new FormControl("", [Validators.required]),
    SelGiorno: new FormControl(this.presel.ID, [Validators.required]), //è richiesto
    settimana: new FormControl(false)
  });

  SubmitProf() {
    console.log(this.PERPROF.value);
    if (this.PERPROF.value.settimana) {
      this.http
        .leggituttalasettimana_prof(this.PERPROF.value)
        .subscribe((datidafunz: DatiRicevuti) => {
          this.dati = datidafunz;
          const dialoref = this.dialog.open(DialogprofComponent, {
            data: { orario: this.dati, form: this.PERPROF.value },
            height: "60%",
            width: "80%"
          });
        });
    } else {
      this.http
        .leggigiorno_prof(this.PERPROF.value)
        .subscribe((datidafunz: DatiRicevuti) => {
          this.dati = datidafunz;
          const dialoref = this.dialog.open(DialogprofComponent, {
            data: { orario: this.dati, form: this.PERPROF.value },
            height: "60%",
            width: "80%"
          });
        });
    }
  }

  ngOnInit() {
    this.http.leggituttiiprof().subscribe((profac: Prof) => {
      this.profac = profac;
    });
    this.http.leggituttiigiorni().subscribe((Presodallafunzione: Giorno) => {
      this.giorniac = Presodallafunzione;
    });
  }
}
