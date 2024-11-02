import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'new-group',
    loadComponent: () => import('./new-group/new-group.page').then( m => m.NewGroupPage)
  },
 
  {
    path: 'product',
    loadComponent: () => import('./product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'contact/:name/:avatar',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },

];
