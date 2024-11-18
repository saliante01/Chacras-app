import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-create',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent implements OnInit {
  userId: number | null = null;
  title: string = '';
  description: string = '';
  openingHour: string = '8:00'; // Hora de apertura por defecto
  openingPeriod: string = 'AM'; // Periodo de apertura (AM/PM)
  closingHour: string = '5:00'; // Hora de cierre por defecto
  closingPeriod: string = 'PM'; // Periodo de cierre (AM/PM)

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit(): void {
    if (!this.userId) {
      alert('No se pudo obtener el ID del usuario.');
      return;
    }

    const formattedOpeningHours = `${this.openingHour} ${this.openingPeriod} - ${this.closingHour} ${this.closingPeriod}`;

    const newChacra = {
      title: this.title,
      description: this.description,
      openingHours: formattedOpeningHours,
      user: {
        id: this.userId,
      },
    };

    this.http.post<any>('http://localhost:8080/chacras/add', newChacra).subscribe({
      next: (response) => {
        console.log('Chacra creada exitosamente:', response);
        alert(`Chacra "${response.title}" creada exitosamente.`);
        this.router.navigate([`/my-chacras`, this.userId]); // Redirige al componente MyChacras
      },
      error: (err) => {
        console.error('Error al crear la chacra:', err);
        alert('Error al crear la chacra. Intente nuevamente.');
      },
    });
  }

  generateTimeOptions(): string[] {
    const times: string[] = [];
    for (let hour = 1; hour <= 12; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedMinute = minute === 0 ? '00' : `${minute}`;
        times.push(`${hour}:${formattedMinute}`);
      }
    }
    return times;
  }
}
