import { Component } from '@angular/core';
import { ProductImageComponent } from './product-image/product-image';
import { ProductInfoComponent } from './product-info/product-info';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductImageComponent, ProductInfoComponent],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
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