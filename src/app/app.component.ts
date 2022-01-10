import { Component, OnDestroy, OnInit } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import { Kafka } from 'kafkajs';
import { Observable, Subscription } from 'rxjs';
import { Entity } from './entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isButtonActivated: boolean = false;
  public viewHobbits: boolean = true;

  constructor(private stompService: StompService){ }

  ngOnInit() {
    this.switchButton();
  }

  switchButton() {
    this.isButtonActivated = !this.isButtonActivated;
    this.isButtonActivated ?
      this.stompService.activate() :  
      this.stompService.deactivate()
  }
}
