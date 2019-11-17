import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: any;
  user: any;
  age: any;
  email: any;
  password: any;

  modelName = { form: null }
  modelUser = { form: null }
  modelAge = { form: null }
  modelEmail = { form: null }
  modelPassword = { form: null }

  constructor(private router: Router, private alertController: AlertController) { }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm?',
      message: 'Are you sure to submit this form',
      buttons: [{
        text: 'Cancel',
        handler: () => {
          console.log('Confirm Cancel');
        }
      },
      {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Sent');
          let navigationExtras: NavigationExtras = {
            state: {
              name: this.name,
              user: this.user,
              age: this.age,
              email: this.email,
              password: this.password
            }
          }
          this.router.navigate(['view-info'], navigationExtras);
        }
      }
      ]
    })
    await alert.present();
  }

  submit(form: NgForm) {
    this.name = form.value.name;
    this.user = form.value.user;
    this.age = form.value.age;
    this.email = form.value.email;
    this.password = form.value.password;

    console.log("Name is ", this.name);
    console.log("Username is ", this.user);
    console.log("Age is ", this.age);
    console.log("Email is ", this.email);
    console.log("Password is ", this.password);

    if (this.name == null || this.user == null || this.age == null || this.email == null || this.password == null) {
      console.log("No Data");
    }
    else {
      this.presentAlertConfirm();

    }
  }

}
