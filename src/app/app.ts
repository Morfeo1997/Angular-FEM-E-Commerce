import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importas la clase del componente
import { NavbarComponent } from './components/navbar/navbar'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Lo agregas al arreglo de imports
  imports: [RouterOutlet, NavbarComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'mi-proyecto-angular';
}