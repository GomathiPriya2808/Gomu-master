import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonText,IonLabel,IonListHeader,IonAvatar,IonItem,IonList,IonButton,IonButtons,IonIcon,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search, qrCodeOutline,addCircleOutline, peopleOutline, logoInstagram, logoFacebook } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonText,IonLabel,IonListHeader,IonAvatar,RouterLink,IonItem,IonList,IonButton,IonButtons,IonIcon,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  constructor(private router:Router,) {
    addIcons({search,qrCodeOutline,addCircleOutline,peopleOutline,logoInstagram,logoFacebook});
   }
   gotohomepage(){
    this.router.navigate(['/home']);

   }
  ngOnInit() {
  }

}
