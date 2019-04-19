import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { RouterModule, Routes,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

@Injectable()
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{visitorId: number, name: string, location: string, visitDate: string, description: string} > = [];
  constructor(public http: HttpClient) {
    this.initCallFunction();
  }

  ngOnInit() {
  }

  initCallFunction() {
    this.http.get('http://localhost:8080/visitor/get/all').subscribe(data => {
      console.log();
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.items.push({
          visitorId: data[i].visitorId,
          name: data[i].name,
          location: data[i].location,
          visitDate: data[i].visitDate,
          description: data[i].description,
        });
      }
    });
  }

  deleteVisitor(visitor) {
    this.http.get('http://localhost:8080/visitor/delete/' + visitor.visitorId).subscribe(data => {
      const index = this.items.indexOf(visitor);
      this.items.splice(index, 1);
    });
  }

  editVisitor(visitor) {
    // this.router.data(visitor);
    console.log(visitor);
  }
}
