import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // BehaviorSubject para que los componentes puedan suscribirse a cambios
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  
  // Observable público para que otros componentes se suscriban
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  // Obtener items actuales
  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  // Agregar item al carrito
  addToCart(item: CartItem): void {
    const currentItems = this.getCartItems();
    const existingItem = currentItems.find(i => i.name === item.name);

    if (existingItem) {
      // Si ya existe, incrementar cantidad
      existingItem.quantity += item.quantity;
      this.cartItemsSubject.next([...currentItems]);
    } else {
      // Si no existe, agregarlo
      this.cartItemsSubject.next([...currentItems, item]);
    }
  }

  // Remover item del carrito
  removeItem(index: number): void {
    const currentItems = this.getCartItems();
    currentItems.splice(index, 1);
    this.cartItemsSubject.next([...currentItems]);
  }

  // Obtener cantidad total de items
  getTotalItemCount(): number {
    return this.getCartItems().reduce((total, item) => total + item.quantity, 0);
  }

  // Obtener precio total
  getTotalPrice(): number {
    return this.getCartItems().reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Vaciar carrito
  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}