import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChacrasService } from '../services/chacras.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details-chacra-user',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './details-chacra-user.component.html',
  styleUrls: ['./details-chacra-user.component.css'],
})
export class DetailsChacraUserComponent implements OnInit {
  chacra: any = null;

  constructor(private route: ActivatedRoute, private chacrasService: ChacrasService) {}

  ngOnInit(): void {
    const chacraId = Number(this.route.snapshot.paramMap.get('id'));

    if (chacraId) {
      // Realiza la solicitud GET para obtener los detalles de la chacra
      this.chacrasService.getChacraById(chacraId).subscribe({
        next: (data) => {
          this.chacra = data;
          console.log('Detalles de la chacra obtenidos:', this.chacra);
        },
        error: (err) => {
          console.error('Error al obtener los detalles de la chacra:', err);
        }
      });
    }
  }
}
