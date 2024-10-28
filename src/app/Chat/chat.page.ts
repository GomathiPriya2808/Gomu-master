import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, IonBadge } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RouterLink } from '@angular/router';
import {
  IonFab,
  IonFabButton,
  IonImg,
  IonChip,
  IonFooter,
  IonItem,
  IonLabel,
  IonListHeader,
  IonList,
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonButton,
  IonSearchbar,
  IonIcon,
  IonText,
  IonInput
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  pinOutline,
  addOutline,
  callOutline,
  peopleCircleOutline,
  discOutline,
  cameraOutline,
  chatboxOutline,
  ellipsisVerticalOutline,
  qrCodeOutline,
  add,
  archiveOutline,
  search, ellipseOutline,
  ellipse, heart } from 'ionicons/icons';
import lottiWeb from'lottie-web';
@Component({
  selector: 'app-tab1',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
  standalone: true,
  imports: [IonBadge,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    RouterLink,
    IonFab,
    IonFabButton,
    IonImg,
    IonChip,
    IonFooter,
    IonItem,
    IonLabel,
    IonListHeader,
    IonList,
    IonTabs,
    IonTabButton,
    IonTabBar,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonButton,
    IonSearchbar,
    IonIcon,
    IonText,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput

  ],
})
export class ChatPage implements AfterViewInit {

  @ViewChild('lottieContainer',{static:true},) lottieContainer!:ElementRef;
  

  constructor() {
    addIcons({qrCodeOutline,cameraOutline,ellipsisVerticalOutline,heart,archiveOutline,ellipse,discOutline,callOutline,pinOutline,addOutline,add,peopleCircleOutline,chatboxOutline,});
  }
  ngAfterViewInit() {
    if(this.lottieContainer){
      lottiWeb.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/icon/Animation - 1729919198178 (2).json',
      });
    }

  }
}
