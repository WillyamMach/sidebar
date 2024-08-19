import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
import { Dados } from '../../interfaces/dados';

@Component({
  selector: 'app-gastos-info',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './gastos-info.component.html',
  styleUrl: './gastos-info.component.scss'
})
export class GastosInfoComponent {
  dados: Dados[] = [
    {id: 1, name: 'carro', value: 400, date: 20240818},
    {id: 2, name: 'cartao', value: 400, date: 20240818},  
    {id: 3, name: 'pix', value: 400, date: 20240818},  
  ]

  colunasTabela: string[] = ['id', 'name', 'value', 'date']

}
