import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage='';
  dataUser = {
    email:'',
    password:''
  };
  constructor(
    public afth: AngularFireAuth,
    private navCtrl: NavController
  ) { }
  
  Inscri(){
    this.navCtrl.navigateForward('/register');
  }

  login(){
    this.afth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then(res=>{

      
      this.navCtrl.navigateForward('tabs/tabs/tab1');
      this.dataUser ={
        email:'',
        password:''
      }

    },err=>{

      this.errorMessage=' login ou mot de passe incorrectes !';

    }
    
    )
    
  }

  ngOnInit() {
  }

}
