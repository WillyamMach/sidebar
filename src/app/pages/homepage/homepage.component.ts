import { Component } from '@angular/core';
import { SidebarComponent } from '../../includes/sidebar/sidebar.component';
import { NavbarComponent } from '../../includes/navbar/navbar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
