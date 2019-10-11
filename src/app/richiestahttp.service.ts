import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Classe,
  DatiRicevuti,
  Giorno,
  Aula,
  Prof,
  prof_giorni,
  prof_materie
} from "./datidainviare";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class RichiestahttpService {
  $myserver = "http://gorgainc.ns0.it";
  //${this.$myserver}
  leggitutteleclassi(): Observable<Classe> {
    return this.http.get<Classe>(`./php/gettutteleclassi.php`);
  }
  leggituttiigiorni(): Observable<Giorno> {
    return this.http.get<Giorno>(`./php/gettuttiigiorni.php`);
  }
  leggitutteleaule(): Observable<Aula> {
    return this.http.get<Aula>(`./php/gettutteleaule.php`);
  }
  leggituttiiprof(): Observable<Prof> {
    return this.http.get<Prof>(`./php/gettuttiiprof.php`);
  }
  leggigiorniliberi(obj): Observable<prof_giorni> {
    return this.http.get<prof_giorni>(
      `./php/getgiorniliberi.php?prof=${obj.SelProf}`
    );
  }
  leggimaterie_prof(obj): Observable<prof_materie> {
    return this.http.get<prof_materie>(
      `./php/leggimaterie_perprof.php?prof=${obj.SelProf}`
    );
  }
  ////////////////////////////////CLASSE////////////////////////////////////////
  leggigiorno_classe(obj): Observable<DatiRicevuti> {
    return this.http.get<DatiRicevuti>(
      `./php/getgiorno_perclasse.php?giorno=${
        obj.SelGiorno
      }&classe=${obj.SelClasse}`
    );
  }
  leggituttalasettimana_classe(obj): Observable<DatiRicevuti> {
    return this.http.get<DatiRicevuti>(
      `./php/getsettimana_perclasse.php?classe=${obj.SelClasse}`
    );
  }
  //////////////////////////////////AULA/////////////////////////////////////////
  leggigiorno_aula(obj): Observable<DatiRicevuti> {
    return this.http.get<DatiRicevuti>(
      `./php/getgiorno_peraula.php?giorno=${
        obj.SelGiorno
      }&aula=${obj.SelAula}`
    );
  }
  leggituttalasettimana_aula(obj): Observable<DatiRicevuti> {
    return this.http.get<DatiRicevuti>(
      `./php/getsettimana_peraula.php?aula=${obj.SelAula}`
    );
  }
  //////////////////////////////////PROF//////////////////////////////////////
  leggigiorno_prof(obj): Observable<DatiRicevuti> {
    return this.http.get<DatiRicevuti>(
      `./php/getgiorno_perprof.php?prof=${obj.SelProf}&giorno=${
        obj.SelGiorno
      }`
    );
  }
  leggituttalasettimana_prof(obj): Observable<DatiRicevuti> {
    return this.http.get<DatiRicevuti>(
      `./php/getsettimana_perprof.php?prof=${obj.SelProf}`
    );
  }

  constructor(private http: HttpClient) {}
}
