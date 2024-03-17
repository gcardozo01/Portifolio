import { Component, signal } from '@angular/core';
import { ISocialMedia } from '../../interfaces/isocial-media';

@Component({
  selector: 'btn-social',
  standalone: true,
  imports: [],
  templateUrl: './btn-social.component.html',
  styleUrl: './btn-social.component.scss',
})
export class BtnSocialComponent {
  public socialMedia = signal<ISocialMedia[]>([
    {
      name: 'gmail',
      link: 'mailto:guilhermecardozo91@gmail.com?subject=&body=',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/guilherme-cardozo-73322525a/',
    },
    {
      name: 'github',
      link: 'https://github.com/gcardozo01',
    },
  ]);

  redirectSocialMedia(link: string) {
    window.open(link);
  }
}
