import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'faq',
        children: [
          {
            path: '',
            loadChildren: '../faq/faq.module#FAQPageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'gallery',
        children: [
          {
            path: '',
            loadChildren: '../gallery/gallery.module#GalleryPageModule'
          }
        ]
      },
      {
        path: 'time-table',
        children: [
          {
            path: '',
            loadChildren: '../time-table/time-table.module#TimeTablePageModule'
          }
        ]
      },
      {
        path: 'contact-us',
        children: [
          {
            path: '',
            loadChildren: '../contact-us/contact-us.module#ContactUsPageModule'
          }
        ]
      },
      {
        path: 'locate-us',
        children: [
          {
            path: '',
            loadChildren: '../locate-us/locate-us.module#LocateUsPageModule'
          }
        ]
      },
      {
        path: 'about-us',
        children: [
          {
            path: '',
            loadChildren: '../about-us/about-us.module#AboutUsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
