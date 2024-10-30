import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
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
  IonToolbar, IonCard, IonCardHeader, IonPopover } from '@ionic/angular/standalone';
import {
  callOutline,
  discOutline,
  add,
  ellipsisVerticalOutline,
  qrCodeOutline,
  search, cameraOutline, addCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'Update.page.html',
  styleUrls: ['Update.page.scss'],
  standalone: true,
  imports: [IonPopover, IonCardHeader, IonCard,
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
    IonCardContent,
    IonChip,
    IonGrid,
    IonRow,
    IonCol,
   
  ],
})
export class UpdatePage {
  constructor() {
      addIcons({qrCodeOutline,cameraOutline,search,ellipsisVerticalOutline,addCircle,add,discOutline,callOutline});}
}
