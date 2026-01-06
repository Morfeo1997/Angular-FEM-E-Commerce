import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar directivas como @for o *ngIf
import { RouterLink, RouterLinkActive } from '@angular/router'; // Importante para la navegación

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // Importamos las herramientas de navegación
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  // Datos que queremos mostrar en el menú
  navLinks = [
    { path: '/', label: 'Collections' },
    { path: '/men', label: 'Men' },
    { path: '/women', label: 'Women' },
    { path: '/about', label: 'About' },
    { path: '/contacto', label: 'Contact' }
  ];
}