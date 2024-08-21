import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonsComponent } from '../nav-buttons/nav-buttons.component';
import { GerenciaTamanhoNavbarService } from '../../core/services/gerencia-tamanho-navbar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NavButtonsComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  
})
export class SidebarComponent implements OnInit{
  public isSizeActive: boolean = false;
  constructor(private resizeService: GerenciaTamanhoNavbarService) {
  }
  ngOnInit(): void {
    const teste = this.resizeService.isResizeActive.subscribe((value) => {
      this.isSizeActive = value
    })
  }

  setResizeValue() {
    this.isSizeActive = this.resizeService.getSize()
    console.log(this.isSizeActive)
  }
}
