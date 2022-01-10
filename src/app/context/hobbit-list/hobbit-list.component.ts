import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import { Observable } from 'rxjs';
import { Entity } from 'src/app/entity';

@Component({
  selector: 'app-hobbit-list',
  templateUrl: './hobbit-list.component.html',
  styleUrls: ['./hobbit-list.component.css']
})
export class HobbitListComponent implements OnInit {

  public hobbitQuotes: Array<Entity> = [];
  public hobbitMessagesQuotes: Observable<any> | undefined;
  public showloader: boolean = true;
  public stompServiceStatus: boolean = false;

  constructor(private stompService: StompService) { }

  ngOnInit(): void {
    this.stompServiceStatus = this.stompService.active;
    this.subscribeHobbitQuotes();
  }

  subscribeHobbitQuotes() {
    this.hobbitMessagesQuotes = this.stompService.subscribe('/topic/hobbit');

    this.hobbitMessagesQuotes.subscribe(message => {
      const entity: Entity = JSON.parse((message.body));
      this.hobbitQuotes.push(entity);
      this.showloader = false;
    });
  }
}
