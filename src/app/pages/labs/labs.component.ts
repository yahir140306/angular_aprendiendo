import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css'],
})
export class LabsComponent {
  title = 'todo-app';
  welcome = 'Bienvenido a mi primera ';

  tasks = [
    'Instalar Angular CLI',
    'Crear nuevo proyecto',
    'Crear componentes',
    'Crear servicios',
  ];

  name = signal('Jose');
  age = 18;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Jose',
    age: 18,
    img: 'https://w3schools.com/howto/img_avatar.png',
  };

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event: Event) {
   console.log(event);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
