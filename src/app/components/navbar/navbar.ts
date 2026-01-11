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

  isCartOpen: boolean = false;
  cartItems: any[] = [];

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  getCartItemCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  // Método que será llamado desde ProductInfoComponent
  addToCart(item: any): void {
    const existingItem = this.cartItems.find(i => i.name === item.name);
    
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push({ ...item });
    }
  }
}