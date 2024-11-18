import { Component, OnInit } from '@angular/core';
import { ChacrasService } from '../services/chacras.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chacras-all-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chacras-all-admin.component.html',
  styleUrls: ['./chacras-all-admin.component.css'],
})
export class ChacrasAllAdminComponent implements OnInit {
  chacras: any[] = [];
  editingChacra: any = null;
  editedData: any = { title: '', description: '', openingHours: '' };
  creatingChacra: boolean = false;
  newChacra: any = {
    title: '',
    description: '',
    openingTime: { hour: '8', minute: '00', period: 'AM' },
    closingTime: { hour: '5', minute: '00', period: 'PM' },
    userId: null,
  };
  hours: string[] = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  minutes: string[] = ['00', '30'];
  periods: string[] = ['AM', 'PM'];

  constructor(private chacrasService: ChacrasService) {}

  ngOnInit(): void {
    this.chacrasService.getAllChacras().subscribe({
      next: (data) => {
        this.chacras = data;
      },
      error: (err) => {
        console.error('Error al obtener las chacras:', err);
      },
    });
  }

  deleteChacra(chacraId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta chacra?')) {
      this.chacrasService.deleteChacraById(chacraId).subscribe({
        next: (response) => {
          alert(response);
          this.chacras = this.chacras.filter((chacra) => chacra.id !== chacraId);
        },
        error: (err) => {
          console.error('Error al eliminar la chacra:', err);
          alert('Error al eliminar la chacra. Intente nuevamente.');
        },
      });
    }
  }

  startEditing(chacra: any): void {
    const [openingTime, closingTime] = chacra.openingHours.split(' - ');
  
    this.editingChacra = { ...chacra };
    this.editedData = {
      title: chacra.title,
      description: chacra.description,
      openingTime: this.splitTime(openingTime),
      closingTime: this.splitTime(closingTime),
    };
  }
  
  splitTime(time: string): any {
    const [hourMinute, period] = time.split(' ');
    const [hour, minute] = hourMinute.split(':');
    return { hour, minute, period };
  }
  
  saveChacra(): void {
    if (!this.editingChacra) return;
  
    const openingHours = `${this.editedData.openingTime.hour}:${this.editedData.openingTime.minute} ${this.editedData.openingTime.period}`;
    const closingHours = `${this.editedData.closingTime.hour}:${this.editedData.closingTime.minute} ${this.editedData.closingTime.period}`;
  
    const updatedChacra = {
      title: this.editedData.title,
      description: this.editedData.description,
      openingHours: `${openingHours} - ${closingHours}`,
      user: { id: this.editingChacra.user.id },
    };
  
    this.chacrasService.updateChacraById(this.editingChacra.id, updatedChacra).subscribe({
      next: (response) => {
        alert(`Chacra "${response.title}" actualizada exitosamente.`);
        this.editingChacra = null;
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
    this.editingChacra = null;
  }

  startCreating(): void {
    this.creatingChacra = true;
  }

  saveNewChacra(): void {
    if (!this.newChacra.userId) {
      alert('Por favor, completa el ID del usuario.');
      return;
    }

    const openingHours = `${this.newChacra.openingTime.hour}:${this.newChacra.openingTime.minute} ${this.newChacra.openingTime.period}`;
    const closingHours = `${this.newChacra.closingTime.hour}:${this.newChacra.closingTime.minute} ${this.newChacra.closingTime.period}`;

    const newChacraData = {
      title: this.newChacra.title,
      description: this.newChacra.description,
      openingHours: `${openingHours} - ${closingHours}`,
      user: { id: this.newChacra.userId },
    };

    this.chacrasService.createChacra(newChacraData).subscribe({
      next: (response) => {
        alert(`Chacra "${response.title}" creada exitosamente.`);
        this.creatingChacra = false;
        this.chacras.push(response);
        this.newChacra = {
          title: '',
          description: '',
          openingTime: { hour: '8', minute: '00', period: 'AM' },
          closingTime: { hour: '5', minute: '00', period: 'PM' },
          userId: null,
        };
      },
      error: (err) => {
        console.error('Error al crear la chacra:', err);
        alert('Error al crear la chacra. Intente nuevamente.');
      },
    });
  }

  cancelCreating(): void {
    this.creatingChacra = false;
    this.newChacra = {
      title: '',
      description: '',
      openingTime: { hour: '8', minute: '00', period: 'AM' },
      closingTime: { hour: '5', minute: '00', period: 'PM' },
      userId: null,
    };
  }
}
