import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  // Datos del producto
  brand: string = 'SNEAKER COMPANY';
  productName: string = 'Fall Limited Edition Sneakers';
  description: string = 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.';
  
  // Precios
  currentPrice: number = 125.00;
  originalPrice: number = 250.00;
  discountPercentage: number = 50;

  // Cantidad seleccionada
  quantity: number = 0;

  // Evento para comunicar al padre cuando se agrega al carrito
  @Output() addToCart = new EventEmitter<number>();

  // Incrementar cantidad
  incrementQuantity(): void {
    this.quantity++;
  }

  // Decrementar cantidad
  decrementQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  // Agregar al carrito
  onAddToCart(): void {
    if (this.quantity > 0) {
      this.addToCart.emit(this.quantity);
      // Opcional: resetear cantidad después de agregar
      // this.quantity = 0;
    }
  }

  // Calcular descuento (útil para mostrar)
  getDiscount(): number {
    return this.originalPrice - this.currentPrice;
  }
}