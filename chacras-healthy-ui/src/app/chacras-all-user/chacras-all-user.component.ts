import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChacrasService } from '../services/chacras.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chacras-all-user',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './chacras-all-user.component.html',
  styleUrls: ['./chacras-all-user.component.css'],
})
export class ChacrasAllUserComponent implements OnInit {
  userId: number | null = null;
  chacras: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private chacrasService: ChacrasService) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.chacrasService.getAllChacras().subscribe({
      next: (data) => {
        this.chacras = data;
      },
      error: (err) => {
        console.error('Error al obtener las chacras:', err);
      }
    });
  }

  goToMyChacras(): void {
    if (this.userId !== null) {
      this.router.navigate([`/my-chacras`, this.userId]);
    }
  }

  goToDetails(chacraId: number): void {
    this.router.navigate([`/details-chacra-user`, chacraId]); // Redirige pasando el ID de la chacra
  }
}
