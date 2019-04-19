import { Component } from '@angular/core';
import { Visitor } from '@angular/compiler/src/render3/r3_ast';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private welcomeCardVisible: Boolean = true;
  private name: String;
  private description: String;
  private visitDate: String;
  private location: String;
  private today = new Date().toJSON().split('T')[0];
  constructor(public client: HttpClient) {
  }

  changeWelcomeCardVisibility(visibilityVariable: boolean) {
    this.welcomeCardVisible = visibilityVariable;
  }

  saveVisitorDetails() {
    const visitor = {
      name  : this.name,
      description : this.description,
      visitDate : this.visitDate.split('T')[0],
      location : this.location
    };
    console.log(visitor);
    this.client.post('http://localhost:8080/visitor/save', visitor).subscribe(data => {
      // alert("Saved with Id: "+ data.id);
    });
  }

  // segmentChanged(ev: any) {
  //   this.activityCardValue = ev.detail.value;
  // }

}
