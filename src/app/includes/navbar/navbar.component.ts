import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import { GerenciaTamanhoNavbarService } from '../../core/services/gerencia-tamanho-navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private sizeService: GerenciaTamanhoNavbarService) {}

  resizeSideBar() {
    this.sizeService.changeWidth()
  }

}
