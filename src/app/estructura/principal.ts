import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from './nav/nav';
import { Header } from './header/header';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-principal',
  imports: [RouterModule, Nav, Header, Footer],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
