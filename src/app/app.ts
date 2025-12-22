import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./componets/navbar/navbar";
import { Home } from "./pages/home/home";
import { Footer } from "./componets/footer/footer";
import { Contact } from "./pages/contact/contact";
import { ApiService } from './api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectt');

}
