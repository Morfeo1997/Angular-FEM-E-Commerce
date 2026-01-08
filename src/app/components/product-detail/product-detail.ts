import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  
  // Método para manejar cuando se agrega al carrito
  handleAddToCart(quantity: number): void {
    console.log(`Agregado al carrito: ${quantity} unidades`);
    // Aquí puedes:
    // - Actualizar un servicio de carrito
    // - Mostrar una notificación
    // - Emitir un evento al componente padre (si hay uno superior)
    // - Actualizar el estado global
  }
}