import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  title = 'todo-app';
  welcome = 'Bienvenido a mi primaera ';
  tasks = [
    'Instalar Angular CLI',
    'Crear nuevo proyecto',
    'Crear componentes',
    'Crear servicios',
  ];

  name = 'Jose';
  age = 18;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';
}
