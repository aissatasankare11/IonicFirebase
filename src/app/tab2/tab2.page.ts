import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  email='';
  nom='';
  prenom='';
  id='';
  dataUser ={
    email:'',
    password:''
  };
  
  constructor( private afdb:AngularFireDatabase, private aft: AngularFireAuth, private navCtrl: NavController ) {
    
    this.afdb.list('user').snapshotChanges(['child_added']).subscribe(ress => {
      console.log(ress);
      
    });


    this.aft.authState.subscribe(auth=>{

      if (!auth) {
        console.log('ooooo');
        
      } else {
        console.log('ok' + auth.uid + auth.email );
        this.email = auth.email
      }

    }
    )

  }

  logout(){
    this.aft.signOut();
    console.log('ok');
    console.log('Email:' + this.dataUser.email);
    console.log('Password:' + this.dataUser.password);
    this.navCtrl.navigateForward('login');
  }

}
