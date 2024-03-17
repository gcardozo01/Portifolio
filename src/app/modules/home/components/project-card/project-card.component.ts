import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/iprojects';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  imports: [BtnPrimaryComponent],
})
export class ProjectCardComponent {
  public projects = signal<IProjects[]>([
    {
      title: 'Helpdesk-Front',
      description:
        'Este repositório contém o frontend de um sistema de help desk desenvolvido com Angular 12, oferecendo um ambiente completo para gerenciamento de tickets de suporte.',
      link: 'https://github.com/gcardozo01/Helpdesk-Frontend',
      tecnologies: ['Angular', 'Typesript', 'Sass'],
    },

    {
      title: 'Helpdesk-Back',
      description:
        'Este repositório contém o backend de um sistema de help desk desenvolvido com Spring Boot 2, incluindo autenticação, autorização e operações CRUD completas .',
      link: 'https://github.com/gcardozo01/Helpdesk-Backend',
      tecnologies: ['Spring', 'MySQL'],
    },

    {
      title: 'Finansys',
      description:
        'Este repositório apresenta uma aplicação Angular desenvolvida para o controle de gastos, incorporando um CRUD completo e uma arquitetura master/detail. Além disso, oferece recursos de relatórios para uma análise detalhada dos gastos.',
      link: 'https://github.com/gcardozo01/Finansys',
      tecnologies: ['Angular', 'Sass'],
    },

    {
      title: 'Pokedex',
      description:
        'Este repositório contém uma aplicação Angular que simula uma Pokédex, consumindo a API do PokeAPI para visualização dos dados de cada Pokémon de forma interativa.',
      link: 'https://github.com/gcardozo01/Pokedex',
      tecnologies: ['Angular', 'Sass'],
    },
  ]);

  githubProject(link: string) {
    window.open(link);
  }

  github() {
    window.open('https://github.com/gcardozo01?tab=repositories');
  }
}
