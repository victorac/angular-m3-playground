import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ThemeService } from './theme.service';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatDividerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    SidenavComponent,
    CardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild(SidenavComponent) sidenav: SidenavComponent | undefined;

  constructor(private themeService: ThemeService) {
    const currentYear = this.currentDate.getFullYear();
    const currentMonth = this.currentDate.getMonth();
    this.startDate = new FormControl(new Date(currentYear, currentMonth, 1));
    this.endDate = new FormControl(this.currentDate);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  currentDate = new Date();
  startDate: FormControl<Date | null>;
  endDate: FormControl<Date | null>;
  isHovering = false;
  onMouseEnter() {
    this.isHovering = true;
  }
  onMouseLeave() {
    this.isHovering = false;
  }
}
