import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar directivas como @for o *ngIf
import { RouterLink } from '@angular/router'; // Importante para la navegación
import { CartService } from '../../services/cart'; 
import { Subscription } from 'rxjs'; // 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink], // Importamos las herramientas de navegación
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
  isMobileMenuOpen: boolean = false;
  cartItems: any[] = [];

  private cartSubscription?: Subscription;

  
  constructor(private cartService: CartService) {}

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }
  
  toggleMobileMenu(): void {
  	this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
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
