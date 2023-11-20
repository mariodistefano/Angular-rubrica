import { Persona } from 'src/Persona';
import { ContattiService } from './../contatti.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit, OnChanges , OnDestroy{
  @Input() filtroRicevuto?:any
  persone?:Persona[]
  personeCopia?:Persona[]
  subscription:any;

  constructor(
    private router:Router,
    private contattiService:ContattiService){
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  ngOnChanges() {
    this.filtra()
  }

  ngOnInit() {
    this.subscription= this.contattiService.get().subscribe((persone)=>{
     this.persone = persone,
    this.personeCopia=this.persone})
  }


    eliminaContatto(id:number) {
      //    in questa parte chiamo ngOnInit per far ripartire la get cosichè si aggiorni subito la vista
      this.contattiService.delete(id).subscribe(()=>{this.ngOnInit()})
    }
    modificaContatto(id:number) {
      this.router.navigateByUrl("form/"+id)

    }

    filtra(){
      this.persone=this.personeCopia
      if (this.filtroRicevuto) {
          this.persone = this.persone?.filter((persona)=>persona.name.toLowerCase().startsWith(this.filtroRicevuto.toLowerCase()))
      }

    }
}
