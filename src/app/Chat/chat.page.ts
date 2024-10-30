import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, IonBadge } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
  IonInput,
  IonPopover
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
  ellipse, heart, lockClosedOutline } from 'ionicons/icons';
import lottiWeb from'lottie-web';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
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
    IonInput,
    IonPopover,
    CommonModule,
    
  
  ],
})
export class ChatPage implements AfterViewInit {
onBarcodeScan(value: String) {
  console.log('Scanned value:', value);
}


  ScannedData:string|null=null;
  user:any;

  @ViewChild('lottieContainer',{static:true},) lottieContainer!:ElementRef;
  @ViewChild('staticContainer', {static:true}) staticContainer!:ElementRef; 
  constructor( private route:ActivatedRoute, private productService:ProductService) {
    addIcons({qrCodeOutline,cameraOutline,ellipsisVerticalOutline,archiveOutline,lockClosedOutline,heart,ellipse,discOutline,callOutline,pinOutline,addOutline,add,peopleCircleOutline,chatboxOutline,});
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
    if(this.staticContainer){
      const animation=lottiWeb.loadAnimation({
        container: this.staticContainer.nativeElement,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/assets/icon/Animation - 1729919198178 (2).json',
      });
      animation.goToAndStop(0, true)
    }
  

  }
  
}
