import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonText,IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, discOutline, callOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonText,IonButton, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  isLightGreen=false;

  constructor() {
    addIcons({discOutline,callOutline,triangle,ellipse,square});
  }
  changeColor(){
    this.isLightGreen=!this.isLightGreen;
  }
}
