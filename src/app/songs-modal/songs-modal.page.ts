import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavParams } from '@ionic/angular'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule}from '@ionic/angular';


@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class SongsModalPage implements OnInit {

  songs:any;
  artists: any;
  constructor(private navParams:NavParams){}

  ngOnInit() {
    this.songs= this.navParams.data['songs']
    console.log("recibi",this.songs)

    

  } 


}
