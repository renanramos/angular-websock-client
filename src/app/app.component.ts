import { Component, OnInit } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public state: Observable<string> | undefined;
  public hobbitQuotes: Array<string> = [];
  public friendsQuotes: Array<string> = [];
  public countHobbitQuotes = 0;
  public countFriendsQuotes = 0;
  public hobbitMessagesQuotes: Observable<any> | undefined;
  public friendsMessagesQuotes: Observable<any> | undefined;

  constructor(private stompService: StompService){ }

  ngOnInit() {
    this.subscribeFriendsQuotes();
    this.subscribeHobbitQuotes();
  }

  subscribeFriendsQuotes() {
    this.friendsMessagesQuotes = this.stompService.subscribe('/topic/friends');

    this.friendsMessagesQuotes.subscribe(message => {
      
      this.friendsQuotes.push(message.body);
      this.countFriendsQuotes++;
    });
  }
  
  subscribeHobbitQuotes() {
    this.hobbitMessagesQuotes = this.stompService.subscribe('/topic/hobbit');

    this.hobbitMessagesQuotes.subscribe(message => {
      this.hobbitQuotes.push(message.body);
      this.countHobbitQuotes++;
    });
  }
}
