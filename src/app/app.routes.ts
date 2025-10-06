import {Routes} from '@angular/router';

export const routes:Routes = [
  {
    path: '', //Cuando se abra la aplicacion se va primero a esta ruta vacia, luego se redirige a home
    redirectTo: 'home',
    pathMatch: 'full' //Para que la ruta se muestre completa, hay paginas que enmascaran sus rutas para que no salga el ID, el token, etc
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage)
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./details/details.page').then((m) => m.DetailsPage)
  },
  {
    path: 'info',
    loadComponent: () =>
      import('./info/info.page').then((m) => m.InfoPage)
  }
]