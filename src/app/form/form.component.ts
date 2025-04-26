import { ContattiService } from './../contatti.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contatto } from 'src/Persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, DoCheck {
  idCatturato: any = -1;
  contatto: Contatto = new Contatto();
  isModifica: boolean = false;

  constructor(
    private contattiService: ContattiService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngDoCheck() {
    this.ngOnInit();
  }

  ngOnInit() {
    let numero = this.activatedRoute.snapshot.paramMap.get('id');
    this.idCatturato = numero;

    if (this.idCatturato === ':id') {
      this.isModifica = false;
      this.contatto = new Contatto();
    } else {
      this.isModifica = true;
      if (this.contatto.name === '') {
        this.contattiService
          .getById(this.idCatturato)
          .subscribe((contatto) => (this.contatto = contatto));
      }
    }
  }

  aggiungi(contatto: Contatto) {
    this.contattiService.post(contatto).subscribe();
  }

  modifica(contatto: Contatto) {
    this.contattiService.put(this.idCatturato, contatto).subscribe(() => {
      this.contatto = contatto;
    });
  }
}
