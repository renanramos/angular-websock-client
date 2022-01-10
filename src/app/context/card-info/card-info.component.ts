import { Component, Input, OnInit } from '@angular/core';
import { Entity } from 'src/app/entity';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  @Input('info')
  public info: Entity = new Entity();

  constructor() { }

  ngOnInit() {
  }

}
