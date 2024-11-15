import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonFabList,IonFabButton,IonFab,IonLabel,IonBadge,IonAvatar,IonList,IonText,IonItem,IonButtons,IonButton,IonIcon,IonTabs,IonTabBar,IonFooter,IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonPopover } from '@ionic/angular/standalone';
import {
  calculator,
  pencil,
  person,
  discOutline,
  callOutline, qrCodeOutline, cameraOutline, ellipsisVerticalOutline, heart, chevronUpCircle, search, lockClosedOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
  standalone: true,
  imports: [IonPopover, IonFabList,IonFabButton,IonFab,IonBadge,IonLabel,IonAvatar,IonList,IonItem,IonText,IonButton,IonButtons,RouterLink,IonIcon,IonTabs,IonTabBar,IonFooter,IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CallsPage  {

  constructor() {
        addIcons({qrCodeOutline,cameraOutline,search,ellipsisVerticalOutline,heart,lockClosedOutline,chevronUpCircle,discOutline,callOutline,person,pencil,calculator});

  }


}
