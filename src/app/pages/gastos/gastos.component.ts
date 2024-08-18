import { Component } from '@angular/core';
import { SidebarComponent } from '../../includes/sidebar/sidebar.component';
import { NavbarComponent } from '../../includes/navbar/navbar.component';
import { FooterComponent } from '../../includes/footer/footer.component';
import { GastosInfoComponent } from '../../includes/gastos-info/gastos-info.component';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    GastosInfoComponent
  ],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.scss'
})
export class GastosComponent {

}
