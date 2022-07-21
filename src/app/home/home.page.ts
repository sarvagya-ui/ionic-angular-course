import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  course = [];
  courseName !: string;
  courseRating !: number;

  constructor(private alertController: AlertController) { }


  onSubmit() {
    if(this.courseName == undefined || this.courseRating == undefined) {
      this.presentAlert();
      return;
    }
    this.course.push({ "courseName": this.courseName, "courseRating": this.courseRating });
      this.courseName = "";
      this.courseRating = 0;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Input Invalid',
      subHeader: '',
      message: 'Please enter a valid input',
      buttons: ['OK']
    });
    await alert.present();
  }

}

