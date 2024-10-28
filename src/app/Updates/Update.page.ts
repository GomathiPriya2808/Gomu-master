import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabButton,
  IonFooter,
  IonTabs,
  IonTabBar,
  IonText,
  IonLabel,
  IonFabButton,
  IonFab,
  IonAvatar,
  IonItem,
  IonList,
  IonIcon,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonToolbar, IonCard, IonCardHeader } from '@ionic/angular/standalone';
import {
  callOutline,
  discOutline,
  add,
  ellipsisVerticalOutline,
  qrCodeOutline,
  search,
  cameraOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'Update.page.html',
  styleUrls: ['Update.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCard,
    IonTabButton,
    RouterLink,
    IonFooter,
    IonTabs,
    IonTabBar,
    IonFabButton,
    IonText,
    IonLabel,
    IonFabButton,
    IonFab,
    IonItem,
    IonAvatar,
    IonList,
    IonIcon,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent
  ],
})
export class UpdatePage {
  constructor() {
      addIcons({qrCodeOutline,search,ellipsisVerticalOutline,cameraOutline,add,discOutline,callOutline});}
}
