import { ContattiService } from './../contatti.service';
import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Contatto } from 'src/Persona';
@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css'],
})
export class TabellaComponent implements OnInit, OnDestroy {
  @Input() filtroRicevuto?: string;
  contacts = signal<Contatto[]>([]);
  contactService = inject(ContattiService);
  router = inject(Router);
  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.contactService.get().subscribe((contatti) => {
      this.contacts.set(contatti);
    });
  }

  eliminaContatto(contattoId: number) {
    this.contactService.delete(contattoId).subscribe(() => {
      this.contacts.update((contatti) =>
        contatti.filter((contatto) => contatto.id !== contattoId),
      );
    });
  }

  modificaContatto(contattoId: number) {
    this.router.navigateByUrl('/form/' + contattoId);
  }
}
