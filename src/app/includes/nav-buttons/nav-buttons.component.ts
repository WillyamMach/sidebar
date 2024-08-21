import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list'; 
import { GerenciaTamanhoNavbarService } from '../../core/services/gerencia-tamanho-navbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-buttons',
  standalone: true,
  imports: [MatIconModule, MatListModule, CommonModule],
  templateUrl: './nav-buttons.component.html',
  styleUrl: './nav-buttons.component.scss',
})

export class NavButtonsComponent implements OnInit{
  showMessage: boolean = false;
  @Input() icon: string = ''
  @Input() mensagem: string = ''
  @Input() href: string = ''

  constructor(private gerenciaNavbarService: GerenciaTamanhoNavbarService) {}

  ngOnInit(): void {
    this.gerenciaNavbarService.isResizeActive.subscribe(value => {
      this.showMessage = value;
    })
  }
}
