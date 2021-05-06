import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass'],
})
export class AppComponent {
  // public appPages = [
  //   { title: 'Dashboard', url: '/folder/Dashboard', icon: 'pie-chart-outline' },
  //   { title: 'Usuarios', url: '/folder/Users', icon: 'people-outline' },
  //   { title: 'Informes', url: '/folder/Reports', icon: 'reader-outline' },
  //   { title: 'Energía', url: '/folder/Energy', icon: 'flash-outline' },
  //   { title: 'Incidencias', url: '/folder/Issues', icon: 'warning-outline' },
  //   { title: 'Powen +', url: '/folder/Powen', icon: 'medical-outline' },
  // ];

  public sections = [
    {
      title: 'Operaciones', subtitle: 'Operaciones varias', options: [
        { title: 'Clientes', url: '/clients', icon: 'people-outline' },
        { title: 'Grupos', url: '/groups', icon: 'color-filter-outline' }
      ]
    },
    {
      title: 'Dashboard', subtitle: 'Dashboard Principal', options: [
        { title: 'Dashboard', url: '/dashboard', icon: 'pie-chart-outline' }
      ]
    },
  ]


  constructor() { }
}
