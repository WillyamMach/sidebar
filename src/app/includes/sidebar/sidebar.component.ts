import { Component } from '@angular/core';
import { GerenciaTamanhoNavbarService } from '../../services/gerencia-tamanho-navbar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private isSizeActive!: boolean;
  constructor(private resizeService: GerenciaTamanhoNavbarService) {
  }

  setResizeValue() {
    this.isSizeActive = this.resizeService.getSize()
    console.log(this.isSizeActive)
  }
}
