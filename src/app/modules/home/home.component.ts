import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { Component, OnInit } from '@angular/core';

import { ETheme } from './enums/ETheme.enum';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BtnSocialComponent } from './components/btn-social/btn-social.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [BtnPrimaryComponent, ProjectCardComponent, BtnSocialComponent],
})
export class HomeComponent implements OnInit {
  public theme: string = '';

  ngOnInit() {
    this.themeActive();
  }

  toggle() {
    if (localStorage.getItem('theme') == 'dark-theme') {
      localStorage.setItem('theme', ETheme.THEME_LIGTH);

      this.themeActive();
    } else if (localStorage.getItem('theme') == 'ligth-theme') {
      localStorage.setItem('theme', ETheme.THEME_DARK);

      this.themeActive();
    }
  }

  downloadCv() {
    window.open('assets/cv/curriculo.docx');
  }

  // ----- PRIVATE METHODS ----- //

  // Check which theme is active
  private themeActive(): void {
    this.localStorageThemeNull();

    const body = document.querySelector('body');

    if (localStorage.getItem('theme') == 'dark-theme') {
      this.theme = 'dark';

      body?.setAttribute('class', ETheme.THEME_DARK);
    } else if (localStorage.getItem('theme') == 'ligth-theme') {
      this.theme = 'ligth';

      body?.setAttribute('class', ETheme.THEME_LIGTH);
    }
  }

  // Check if the variable in localstorage is null
  private localStorageThemeNull(): void {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', ETheme.THEME_LIGTH);
    }
  }
}
