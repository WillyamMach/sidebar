import { Component } from '@angular/core';
import { SidebarComponent } from '../../includes/sidebar/sidebar.component';
import { NavbarComponent } from '../../includes/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card'; 
import { NavButtonsComponent } from '../../includes/nav-buttons/nav-buttons.component';
import { FooterComponent } from '../../includes/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    SidebarComponent,
    NavButtonsComponent,
    FooterComponent,
    NavbarComponent,
    MatCardModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {

}
