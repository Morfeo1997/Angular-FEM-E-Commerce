import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-image.html',
  styleUrls: ['./product-image.css']
})
export class ProductImageComponent {
  // Array con las rutas de las imágenes principales
  productImages: string[] = [
    'assets/images/image-product-1.jpg',
    'assets/images/image-product-2.jpg',
    'assets/images/image-product-3.jpg',
    'assets/images/image-product-4.jpg'
  ];

  // Array con las rutas de los thumbnails
  thumbnailImages: string[] = [
    'assets/images/image-product-1-thumbnail.jpg',
    'assets/images/image-product-2-thumbnail.jpg',
    'assets/images/image-product-3-thumbnail.jpg',
    'assets/images/image-product-4-thumbnail.jpg'
  ];

  // Índice de la imagen actual (empieza en 0)
  currentImageIndex: number = 0;
  isLightboxOpen: boolean = false;

  // Obtener la imagen actual
  getCurrentImage(): string {
    return this.productImages[this.currentImageIndex];
  }

  // Ir a la imagen anterior
  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      // Opcional: volver a la última imagen (comportamiento circular)
      this.currentImageIndex = this.productImages.length - 1;
    }
  }

  // Ir a la siguiente imagen
  nextImage(): void {
    if (this.currentImageIndex < this.productImages.length - 1) {
      this.currentImageIndex++;
    } else {
      // Opcional: volver a la primera imagen (comportamiento circular)
      this.currentImageIndex = 0;
    }
  }

  // Seleccionar una imagen específica (para los thumbnails)
  selectImage(index: number): void {
    if (index >= 0 && index < this.productImages.length) {
      this.currentImageIndex = index;
    }
  }

  // Verificar si una imagen está activa (para estilos del thumbnail)
  isActive(index: number): boolean {
    return this.currentImageIndex === index;
  }
  openLightbox(): void {
    this.isLightboxOpen = true;
  }
  closeLightbox(): void {
    this.isLightboxOpen = false;
  }
}