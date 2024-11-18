import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importa el Router
import { ChacrasService } from '../services/chacras.service';

@Component({
  selector: 'app-chacras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chacras.component.html',
  styleUrls: ['./chacras.component.css']
})
export class ChacrasComponent implements OnInit {
  chacras: any[] = []; // Almacena las chacras recibidas del backend

  constructor(private chacrasService: ChacrasService, private router: Router) {}

  ngOnInit(): void {
    this.chacrasService.getAllChacras().subscribe({
      next: (data) => {
        this.chacras = data;
      },
      error: (err) => {
        console.error('Error al obtener las chacras:', err);
      }
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/details', id]); // Navega al componente Details con el ID de la chacra
  }
  navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
