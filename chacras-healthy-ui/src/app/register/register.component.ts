import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  name: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  onRegister(): void {
    const userData = {
      email: this.email,
      name: this.name,
      password: this.password
    };

    this.userService.registerUser(userData).subscribe({
      next: () => alert('Usuario registrado correctamente'),
      error: (err) => alert(`Error al registrar usuario: ${err.message}`)
    });
  }
}
