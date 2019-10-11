import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {

  formclasse = new FormGroup({
    nomeclasse : new FormControl(),
    disattiva : new FormControl(false),

  })
  disattiva = new FormControl(false);
  cliccato(){
    console.warn(this.formclasse.value);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
