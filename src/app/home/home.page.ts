import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private welcomeCardVisible: boolean = true;
  private activityCardValue: String = "personal";
  private visitorNameVariable: number = 0;

  changeWelcomeCardVisibility(visibilityVariable: boolean){
    this.welcomeCardVisible = visibilityVariable;
  }

  segmentChanged(ev: any) {
    this.activityCardValue = ev.detail.value;
  }

  increaseVisitor(){
    if(this.visitorNameVariable<=5){
      this.visitorNameVariable+=1;
    }
    console.log(this.visitorNameVariable);
  }
}
