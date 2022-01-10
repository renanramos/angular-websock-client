import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import { Observable } from 'rxjs';
import { Entity } from 'src/app/entity';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  public friendsQuotes: Array<Entity> = [];
  public friendsMessagesQuotes: Observable<any> | undefined;
  public showloader: boolean = true;
  public stompServiceStatus: boolean = false;

  constructor(private stompService: StompService) { }

  ngOnInit(): void {
    this.stompServiceStatus = this.stompService.active;
    this.subscribeFriendsQuotes();
  }

  subscribeFriendsQuotes() {
    this.friendsMessagesQuotes = this.stompService.subscribe('/topic/friends');

    this.friendsMessagesQuotes.subscribe(message => {
      const entity: Entity = JSON.parse((message.body));
      this.friendsQuotes.push(entity);
      this.showloader = false;
    });
  }

}
