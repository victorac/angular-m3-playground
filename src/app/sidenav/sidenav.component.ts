import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  expandend = false;
  disableLeave = false;

  toggle() {
    this.expandend = !this.expandend;
    if (this.expandend) {
      this.disableLeave = true;
    } else {
      this.disableLeave = false;
    }
  }

  enter() {
    this.expandend = true;
  }

  leave() {
    if (!this.disableLeave) {
      this.expandend = false;
    }
  }
}
