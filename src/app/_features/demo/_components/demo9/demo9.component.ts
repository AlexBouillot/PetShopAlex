import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Message } from '../../_models/message';


@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  message: string;
  context: Message[];

  constructor(
    private FDatabase: AngularFireDatabase,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
    this.FDatabase.database.ref('Messages').on('value', (snapshot) => {
      this.context =[];
      for(let key in snapshot.val())
      {
        this.context.push(snapshot.val()[key]);
      };
      this.changeDetectorRef.detectChanges();
    });
  }

  send(e) {
    this.FDatabase.database.ref('Messages').push({ 
      auteur: 'Alex',
      contenu: e.message,
      date: new Date(),
    });
    this.message = null;
  }
}
