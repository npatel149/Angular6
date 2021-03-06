import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDx5rN1-m-W9dUD0ZxAom7vorhSdktCPgI",
      authDomain: "ng-recipe-book-c3da3.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-c3da3.firebaseio.com",
      projectId: "ng-recipe-book-c3da3",
      storageBucket: "ng-recipe-book-c3da3.appspot.com",
      messagingSenderId: "383575661438"
    });

  }
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
