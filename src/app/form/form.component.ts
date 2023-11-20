import { ContattiService } from './../contatti.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Persona } from 'src/Persona';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, DoCheck {
  idCatturato:any=-1;
  persona:Persona = new Persona
  isModifica:boolean = false;
  constructor(
    private contattiService:ContattiService,
    private router:Router,
    private activatedRoute:ActivatedRoute){ }
  ngDoCheck() {
    this.ngOnInit()
  }

  ngOnInit(){
    let numero = this.activatedRoute.snapshot.paramMap.get("id")

    this.idCatturato = numero

    if (this.idCatturato === ":id") {
        this.isModifica=false
        this.persona=new Persona

    }else{
      this.isModifica=true
      if(this.persona.name === undefined || null){
      this.contattiService.getById(this.idCatturato).subscribe((persona)=>this.persona=persona)
      }
    }
  }
  aggiungi(persona:Persona) {
    this.contattiService.post(persona).subscribe()
    // this.router.navigateByUrl("/")
    location.replace("/")
  }
  modifica(persona:Persona) {
    this.contattiService.put(this.idCatturato,persona).subscribe()
    // this.router.navigateByUrl("/")
    location.replace("/")


  }
}
