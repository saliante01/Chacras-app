import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChacrasService } from '../services/chacras.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-chacras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-chacras.component.html',
  styleUrls: ['./my-chacras.component.css'],
})
export class MyChacrasComponent implements OnInit {
  userId: number | null = null;
  chacras: any[] = [];
  editingChacra: any = null; // Guarda la chacra que se está editando
  editedData: any = { title: '', description: '', openingHours: '' }; // Datos para el formulario de edición

  constructor(
    private route: ActivatedRoute,
    private chacrasService: ChacrasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.userId !== null) {
      this.chacrasService.getChacrasByUserId(this.userId).subscribe({
        next: (data) => {
          this.chacras = data;
        },
        error: (err) => {
          console.error('Error al obtener las chacras del usuario:', err);
        },
      });
    }
  }

  deleteChacra(chacraId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta chacra?')) {
      this.chacrasService.deleteChacraById(chacraId).subscribe({
        next: (response) => {
          console.log(response);
          alert(response); // Mostrar mensaje de confirmación

          // Eliminar la chacra de la lista localmente
          this.chacras = this.chacras.filter((chacra) => chacra.id !== chacraId);
        },
        error: (err) => {
          console.error('Error al eliminar la chacra:', err);
          alert('Error al eliminar la chacra. Intente nuevamente.');
        },
      });
    }
  }

  goToCreateForm(): void {
    if (this.userId !== null) {
      this.router.navigate([`/form-create`, this.userId]); // Redirige pasando el ID del usuario
    }
  }

  startEditing(chacra: any): void {
    this.editingChacra = { ...chacra }; // Clona la chacra seleccionada
    this.editedData = {
      title: chacra.title,
      description: chacra.description,
      openingHours: chacra.openingHours,
    };
  }

  saveChacra(): void {
    if (!this.editingChacra || !this.userId) return;

    const updatedChacra = {
      title: this.editedData.title,
      description: this.editedData.description,
      openingHours: this.editedData.openingHours,
      user: { id: this.userId }, // Agrega automáticamente el usuario
    };

    this.chacrasService.updateChacraById(this.editingChacra.id, updatedChacra).subscribe({
      next: (response) => {
        console.log('Chacra actualizada:', response);
        alert(`Chacra "${response.title}" actualizada exitosamente.`);
        this.editingChacra = null;

        // Actualiza la lista local con los nuevos datos
        const index = this.chacras.findIndex((c) => c.id === response.id);
        if (index !== -1) {
          this.chacras[index] = response;
        }
      },
      error: (err) => {
        console.error('Error al actualizar la chacra:', err);
        alert('Error al actualizar la chacra. Intente nuevamente.');
      },
    });
  }

  cancelEditing(): void {
    this.editingChacra = null; // Cierra el formulario sobrepuesto
  }
}
