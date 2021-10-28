import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  errorMessage='';
  dataUser = {
    nom:'',
    prenom:'',
    email:'',
    password:''
  }
  constructor(
    public afth: AngularFireAuth,
    private navCtrl: NavController,
    private afdb:AngularFireDatabase
  ) { }

  ngOnInit() {
  }
  Annl(){
    this.navCtrl.navigateForward('/login');
  }
  signup(){
   
    this.afth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then(res=>{
      
      this.afdb.object('user/' + res.user.uid).set(
      { 
        
        prenom: this.dataUser.prenom,
        nom: this.dataUser.nom,
        email: this.dataUser.email,
        password: this.dataUser.password,
      }
      )
       this.navCtrl.navigateForward('tabs/tabs/tab1');
      this. dataUser = {
        nom:'',
        prenom:'',
        email:'',
        password:''

      }


    },err=>{

      this.errorMessage='Veillez Remplire les Champs Correctement';

    }
    
    )
    
  }

}
