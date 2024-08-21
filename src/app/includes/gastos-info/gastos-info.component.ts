import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
import { Dados } from '../../interfaces/dados';
import { GastosService } from '../../core/services/gastos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gastos-info',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './gastos-info.component.html',
  styleUrl: './gastos-info.component.scss'
})
export class GastosInfoComponent implements OnInit{

  constructor(private gastosService: GastosService) {}

  ngOnInit() {
    // const teste = this.gastosService
    // console.log(teste)
    
    // .subscribe((resp) => {
    //   console.log(resp)
    // })

  }

  dados: Dados[] = [
    {id: 1, name: 'carro', value: 400, date: 20240818},
    {id: 2, name: 'cartao', value: 400, date: 20240818},  
    {id: 3, name: 'pix', value: 400, date: 20240818},  
  ]

  colunasTabela: string[] = ['id', 'name', 'value', 'date']

}
