import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar'; 
import { ProductDetailComponent } from './components/product-detail/product-detail'; // Importar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ProductDetailComponent], // Agregar aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'mi-proyecto-angular';
}