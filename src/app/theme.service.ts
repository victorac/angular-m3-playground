import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme = 'light-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleTheme() {
    this.currentTheme =
      this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.renderer.setAttribute(document.body, 'class', this.currentTheme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }
}
