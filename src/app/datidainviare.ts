export class DatiRicevuti{
    Giorno:string;
    Ora:string;
    Aula:string;
    Classe:string;
    Prof:string;
}
export class Giorno{
    ID: string;
    Giorno:string;
  }
  export class Ora{
    ID: string;
    Nome:string;
  }
export class Classe{
  ID:string;
  Classe:string;
}
export class Aula{
  ID:string;
  Aula:string;
}
export class Prof{
  ID:string;
  Nome:string;
}
export class prof_giorni{
  Prof:String;
  Glibero:String;
  ID_Giorno:string;
}
export class prof_materie{
  Prof:string;
  Materia:string;
}