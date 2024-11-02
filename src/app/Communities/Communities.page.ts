import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{NavController} from'@ionic/angular';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonFooter,
  IonButton,
  IonText,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons, IonPopover } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  calculator,
  pencil,
  person,
  discOutline,
  callOutline, qrCodeOutline, cameraOutline, ellipsisVerticalOutline } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'Communities.page.html',
  styleUrls: ['Communities.page.scss'],
  standalone: true,
  imports: [IonPopover, 
    IonFooter,
    IonTabs,
    IonTabBar,
    IonTabButton,
    RouterLink,
    IonButton,
    IonText,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonCardTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    
  ],
})
export class CommunitiesPage {
  constructor(private navCtrl:NavController, private router:Router) {
    addIcons({qrCodeOutline,cameraOutline,ellipsisVerticalOutline,discOutline,callOutline,person,pencil,calculator});
  }
  startCommunity(){
    console.log('Community started');
    this.navCtrl.navigateForward('/Community');
    this.router.navigate(['/Community']);
  }
}
