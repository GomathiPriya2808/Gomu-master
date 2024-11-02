import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs,IonTabBar,IonTabButton,IonBadge,IonTextarea,IonText,IonChip,IonListHeader,IonLabel,IonList,IonItem,IonButtons,IonAvatar,IonButton,IonIcon,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { videocamOutline, ellipsisVerticalOutline, callOutline, arrowBackOutline, lockClosedOutline, discOutline } from 'ionicons/icons';

@Component({
  selector: 'app-babes',
  templateUrl: './babes.page.html',
  styleUrls: ['./babes.page.scss'],
  standalone: true,
  imports: [IonTabs,IonTabBar,IonTabButton,IonBadge,IonTextarea,IonText,IonChip,IonListHeader,IonLabel,IonList,IonItem,IonButtons,IonAvatar,IonButton,IonIcon,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BabesPage implements OnInit {

  constructor() {
      addIcons({arrowBackOutline,videocamOutline,callOutline,ellipsisVerticalOutline,discOutline,lockClosedOutline}); }

  ngOnInit() {
  }


}
