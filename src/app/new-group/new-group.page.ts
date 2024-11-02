import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem,IonAvatar,IonLabel,IonList,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.page.html',
  styleUrls: ['./new-group.page.scss'],
  standalone: true,
  imports: [IonItem,IonAvatar, IonLabel,IonList,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class NewGroupPage implements OnInit {
[x: string]: any;

  constructor() { 
    addIcons({})
  }

  ngOnInit() {
  }

}
