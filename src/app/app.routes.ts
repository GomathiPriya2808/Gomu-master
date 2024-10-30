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
    path: 'babes',
    loadComponent: () => import('./babes/babes.page').then( m => m.BabesPage)
  },

];
