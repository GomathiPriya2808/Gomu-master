import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonLabel,IonItem,IonButtons,IonButton,IonIcon,IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonList, IonText, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-babes',
  templateUrl: './babes.page.html',
  styleUrls: ['./babes.page.scss'],
  standalone: true,
  imports: [IonBadge, IonText, IonLabel,IonItem,IonList, IonAvatar, IonButtons,IonButton,IonIcon,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BabesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
