import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChacrasService } from '../services/chacras.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  chacra: any = null; // Almacena la chacra recibida del backend
  chacraId: number | null = null;

  constructor(private route: ActivatedRoute, private chacrasService: ChacrasService) {}

  ngOnInit(): void {
    // Obtén el ID desde la URL
    this.chacraId = Number(this.route.snapshot.paramMap.get('id'));

    // Realiza la solicitud para obtener los detalles de la chacra
    if (this.chacraId) {
      this.chacrasService.getChacraById(this.chacraId).subscribe({
        next: (data) => {
          this.chacra = data;
        },
        error: (err) => {
          console.error('Error al obtener los detalles de la chacra:', err);
        }
      });
    }
  }
}
