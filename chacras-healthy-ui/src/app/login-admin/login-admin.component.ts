import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.http.post<any>('http://localhost:8080/admins/login', loginData).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('userId', response.id); // Guarda el ID del usuario en localStorage
        this.router.navigate([`/chacras-all-admin`]); // Redirige con el ID
      },
      error: (error) => {
        console.error('Error en el login:', error);
        alert('Credenciales inválidas. Por favor intente nuevamente.');
      },
    });
  }
}
