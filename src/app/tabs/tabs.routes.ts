import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'chat',
        loadComponent: () =>
          import('../Chat/chat.page').then((m) => m.ChatPage),
      },
      {
        path: 'updates',
        loadComponent: () =>
          import('../Updates/Update.page').then((m) => m.UpdatePage),
      },
      {
        path: 'communities',
        loadComponent: () =>
          import('../Communities/Communities.page').then((m) => m.CommunitiesPage),
      },
      {
        path:'calls',
        loadComponent:()=>
          import('../calls/calls.page').then((m)=>m.CallsPage)
      },
      {
        path: '',
        redirectTo: '/tabs/chat',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/chat',
    pathMatch: 'full',
  },
];
