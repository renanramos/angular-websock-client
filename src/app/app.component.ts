import { Component, OnDestroy, OnInit } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import { Observable, Subscription } from 'rxjs';
import { Entity } from './entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public state: Observable<string> | undefined;
  public hobbitQuotes: Array<Entity> = [];
  public friendsQuotes: Array<Entity> = [];
  public countHobbitQuotes = 0;
  public countFriendsQuotes = 0;
  public hobbitMessagesQuotes: Observable<any> | undefined;
  public friendsMessagesQuotes: Observable<any> | undefined;
  public isButtonActivated: boolean = false;
  public viewHobbits: boolean = true;

  constructor(private stompService: StompService){ }

  ngOnInit() {
    this.switchButton();
  }

  ngOnDestroy() {
    this.stompService.disconnect();
  }

  subscribeFriendsQuotes() {
    this.friendsMessagesQuotes = this.stompService.subscribe('/topic/friends');

    this.friendsMessagesQuotes.subscribe(message => {
      const entity: Entity = JSON.parse((message.body));
      this.friendsQuotes.push(entity);
      this.countFriendsQuotes++;
    });
  }
  
  subscribeHobbitQuotes() {
    this.hobbitMessagesQuotes = this.stompService.subscribe('/topic/hobbit');

    this.hobbitMessagesQuotes.subscribe(message => {
      const entity: Entity = JSON.parse((message.body));
      this.hobbitQuotes.push(entity);
      this.countHobbitQuotes++;
    });
  }

 async switchButton() {
    this.isButtonActivated = !this.isButtonActivated;
    this.isButtonActivated ?
      this.activate() :
      await this.deactivate();   
  }

  async deactivate() {
    await this.stompService.deactivate()
      .then(() =>  true)
      .catch(() => false);
  }

  activate() {
    this.stompService.activate();
    this.subscribeFriendsQuotes();
    this.subscribeHobbitQuotes();
  }

  changeContext() {
    this.viewHobbits = !this.viewHobbits;
    console.log(this.viewHobbits)
  }
}
